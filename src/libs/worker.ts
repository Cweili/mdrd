/* eslint-disable no-restricted-globals, @typescript-eslint/ban-ts-comment */
import type { Marked } from 'marked'
import highlight from './highlight'
import katex from './katex'

import {
  loadScript,
} from './utils'

import type {
  MarkdownOptions,
} from './types'

let marked: Marked
async function getMarked(options: MarkdownOptions) {
  if (!marked) {
    await loadScript(options.cdn!.libs!.marked, options.cdn!.prefix)
    // @ts-ignore
    marked = new self.marked.Marked(options.marked)
    marked.use(highlight(options))
    marked.use(katex(options))
  }
  return marked
}

let options: MarkdownOptions
self.addEventListener('message', (event) => {
  if (options) {
    getMarked(options)
      .then(() => marked.parse(event.data))
      .then((result) => self.postMessage(result))
  } else {
    getMarked(options = event.data)
  }
})
