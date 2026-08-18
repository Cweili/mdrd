/* eslint-disable no-restricted-globals, @typescript-eslint/ban-ts-comment */
import type { Marked } from 'marked'
import highlight from './highlight'
import katex from './katex'
import {
  createXssOptions,
  type XssApi,
  type XssFilter,
} from './xss'

import {
  escapeHtml,
  loadScript,
} from './utils'

import type {
  MdrdOptions,
} from './types'

let marked: Marked
let options: MdrdOptions
let ready: Promise<Marked> | undefined
let xss: XssApi | undefined
let filter: XssFilter | undefined
async function getMarked() {
  if (!marked) {
    await loadScript(options.cdn!.libs!.marked!, options.cdn!.prefix!)
    // @ts-ignore
    marked = new self.marked.Marked(options.marked)
    marked.use(highlight(options))
    marked.use(katex(options))
  }
  return marked
}

async function getFilter() {
  if (!options.sanitize?.enabled) {
    return
  }
  if (!xss) {
    await loadScript(options.cdn!.libs!.xss!, options.cdn!.prefix!)
    xss = self.filterXSS as XssApi
  }
  if (!filter) {
    filter = new xss.FilterXSS(createXssOptions(xss, options))
  }
  return filter
}

async function render(text: string) {
  await getMarked()
  const html = await marked.parse(text)
  const current = await getFilter()
  if (!current) {
    return html
  }
  return current.process(html)
}

self.addEventListener('message', (event) => {
  if (!ready) {
    // First message carries the options.
    options = event.data
    ready = getMarked()
    // Avoid an unhandled rejection when marked cannot be initialised.
    ready.catch(() => {})
    return
  }

  ready
    .then(() => render(event.data))
    .then((result) => self.postMessage(result))
    .catch((error) => {
      // Never leave the caller hanging: reply with a graceful fallback instead of
      // dying with an unhandled rejection (which would leave the consumer's
      // promise pending forever).
      console.error('[mdrd] render failed:', error)
      self.postMessage(`<p>mdrd render failed:</p><pre>${escapeHtml(String(error))}</pre>`)
    })
})
