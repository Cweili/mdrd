/* eslint-disable no-restricted-globals, @typescript-eslint/ban-ts-comment */
import { markedHighlight } from 'marked-highlight'

import type {
  MarkdownOptions,
} from '../types'
import {
  loadScript,
} from '../utils'

// @ts-ignore
import loadLanguageComponent from './language'

export default function prism(options: MarkdownOptions) {
  const loadComponent = (component: string) => (
    loadScript(options.cdn!.libs!.prismjs!.replace('prism-core', `prism-${component}`), options.cdn!.prefix)
  )

  async function getPrism() {
    // @ts-ignore
    let { Prism } = self
    if (!Prism) {
      await loadComponent('core')
      // @ts-ignore
      Prism = self.Prism
    }
    return Prism
  }

  return markedHighlight({
    async: true,
    async highlight(code: string, language: string) {
      const Prism = await getPrism()
      const lang = language || 'txt'
      await loadLanguageComponent(Prism, lang, loadComponent)
      return Prism.highlight(code, Prism.languages[lang], lang)
    },
  })
}
