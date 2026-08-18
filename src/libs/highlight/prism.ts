/* eslint-disable no-restricted-globals, @typescript-eslint/ban-ts-comment */
import type Prism from 'prismjs'
import { markedHighlight } from 'marked-highlight'

import type {
  MdrdOptions,
} from '../types'
import {
  escapeHtml,
  loadScript,
} from '../utils'

// @ts-ignore
import loadLanguageComponent from './language'

const context: { Prism?: Partial<typeof Prism> } = self
let prismInstance: typeof Prism
export default function prismjs(options: MdrdOptions) {
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
      const lang = language || 'text'
      try {
        await loadLanguageComponent(prism, lang, loadComponent)
      } catch {
        // Language component is unavailable (e.g. a custom/unknown language or a
        // missing CDN file). Fall back to rendering the code without highlighting.
      }
      const grammar = prism.languages![lang]
      if (grammar) {
        return prism.highlight(code, grammar, lang)
      }
      // Never call prism.highlight with an undefined grammar - it throws and
      // would take the whole worker down. Render the block as plain text.
      return escapeHtml(code)
    },
  })
}
