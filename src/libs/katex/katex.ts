/* eslint-disable consistent-return, no-param-reassign, no-restricted-globals, no-undef */
import type { TokenizerAndRendererExtension, Token } from 'marked'
import type { KatexOptions } from 'katex'

import type {
  MdrdOptions,
} from '../types'
import {
  loadScript,
} from '../utils'

const INLINE = 'inlineKatex'
const BLOCK = 'blockKatex'

const inlineRule = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n$]))\1/
const blockRule = /^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/

interface KatexToken {
  type: string
  raw: string
  text: string
  displayMode: boolean
}

function createRenderer(options?: KatexOptions, newlineAfter?: boolean) {
  return (token: KatexToken) => {
    try {
      const a = self.katex.renderToString(token.text, {
        ...options,
        displayMode: token.displayMode,
      }) + (newlineAfter ? '\n' : '')
      return a
    } catch (err) {
      return token.text
    }
  }
}

function inlineKatex(renderer: ReturnType<typeof createRenderer>) {
  return {
    name: INLINE,
    level: 'inline',
    start(src: string) {
      let index
      let indexSrc = src

      while (indexSrc) {
        index = indexSrc.indexOf('$')
        if (index === -1) {
          return
        }

        if (index === 0 || !/\w/.test(indexSrc.charAt(index - 1))) {
          const possibleKatex = indexSrc.substring(index)

          if (possibleKatex.match(inlineRule)) {
            return index
          }
        }

        indexSrc = indexSrc.substring(index + 1).replace(/^\$+/, '')
      }
    },
    tokenizer(src: string) {
      const match = src?.match(inlineRule)
      if (match) {
        return {
          type: INLINE,
          raw: match[0],
          text: match[2].trim(),
          displayMode: match[1].length === 2,
        }
      }
    },
    renderer,
  }
}

function blockKatex(renderer: ReturnType<typeof createRenderer>) {
  return {
    name: BLOCK,
    level: 'block',
    tokenizer(src: string) {
      const match = src?.match(blockRule)
      if (match) {
        return {
          type: BLOCK,
          raw: match[0],
          text: match[2].trim(),
          displayMode: match[1].length === 2,
        }
      }
    },
    renderer,
  }
}

export default function katex(options: MdrdOptions) {
  return {
    extensions: [
      inlineKatex(createRenderer(options.katex)),
      blockKatex(createRenderer(options.katex, true)),
    ] as TokenizerAndRendererExtension[],
    async: true,
    walkTokens(token: Token) {
      if ([INLINE, BLOCK].indexOf(token.type) >= 0 && !self.katex) {
        return loadScript(options.cdn!.libs!.katex!, options.cdn!.prefix!)
      }
    },
  }
}
