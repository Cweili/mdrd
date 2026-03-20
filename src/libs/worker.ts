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
  loadScript,
} from './utils'

import type {
  MdrdOptions,
} from './types'

let marked: Marked
let xss: XssApi | undefined
let filter: XssFilter | undefined
async function getMarked(options: MdrdOptions) {
  if (!marked) {
    await loadScript(options.cdn!.libs!.marked!, options.cdn!.prefix!)
    // @ts-ignore
    marked = new self.marked.Marked(options.marked)
    marked.use(highlight(options))
    marked.use(katex(options))
  }
  return marked
}

async function getFilter(options: MdrdOptions) {
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
  await getMarked(options)
  const html = await marked.parse(text)
  const current = await getFilter(options)
  if (!current) {
    return html
  }
  return current.process(html)
}

let options: MdrdOptions
self.addEventListener('message', (event) => {
  if (options) {
    render(event.data)
      .then((result) => self.postMessage(result))
  } else {
    getMarked(options = event.data)
  }
})
