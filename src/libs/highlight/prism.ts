/* eslint-disable no-restricted-globals, @typescript-eslint/ban-ts-comment */
import type Prism from 'prismjs'
import { markedHighlight } from 'marked-highlight'

import type {
  MarkdownOptions,
} from '../types'
import {
  loadScript,
} from '../utils'

// @ts-ignore
import loadLanguageComponent from './language'

const context: { Prism?: Partial<typeof Prism> } = self
let prismInstance: typeof Prism
export default function prismjs(options: MarkdownOptions) {
  const loadComponent = (component: string) => (
    loadScript(options.cdn!.libs!.prismjs!.replace('prism-core', `prism-${component}`), options.cdn!.prefix!, context)
  )

  async function getPrism() {
    if (!prismInstance) {
      context.Prism = {
        manual: true,
        disableWorkerMessageHandler: true,
      }
      await loadComponent('core')
      prismInstance = context.Prism as typeof Prism
    }
    return prismInstance
  }

  return markedHighlight({
    async: true,
    async highlight(code: string, language: string) {
      const prism = await getPrism()
      const lang = language || 'txt'
      await loadLanguageComponent(prism, lang, loadComponent)
      return prism.highlight(code, prism.languages![lang], lang)
    },
  })
}
