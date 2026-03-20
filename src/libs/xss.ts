import type {
  MdrdOptions,
  XssWhiteList,
} from './types'

export interface XssFilter {
  process(html: string): string
}

export interface XssApi {
  FilterXSS: new (options?: Record<string, unknown>) => XssFilter
  getDefaultWhiteList(): XssWhiteList
}

function unique(list: string[]) {
  return Array.from(new Set(list))
}

function allow(list: XssWhiteList, tags: string[], attrs: string[]) {
  tags.forEach((tag) => {
    list[tag] = unique((list[tag] || []).concat(attrs))
  })
  return list
}

function defaults(api: XssApi) {
  const list = api.getDefaultWhiteList()

  allow(list, ['a', 'code', 'div', 'p', 'pre', 'span'], ['class'])
  allow(list, ['span'], ['style', 'aria-hidden'])
  allow(list, ['math'], ['xmlns', 'display', 'style'])
  allow(list, ['annotation'], ['encoding'])
  allow(list, [
    'annotation-xml',
    'menclose',
    'mfrac',
    'mi',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mroot',
    'mrow',
    'msqrt',
    'mspace',
    'msub',
    'msubsup',
    'msup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'semantics',
  ], ['style'])
  allow(list, ['defs', 'g', 'line', 'path', 'polygon', 'polyline', 'rect', 'svg', 'use'], [
    'aria-hidden',
    'd',
    'fill',
    'focusable',
    'height',
    'points',
    'preserveAspectRatio',
    'stroke',
    'stroke-width',
    'style',
    'transform',
    'viewBox',
    'width',
    'x',
    'x1',
    'x2',
    'xmlns',
    'xlink:href',
    'y',
    'y1',
    'y2',
  ])

  return list
}

function merge(base: XssWhiteList, next: XssWhiteList = {}) {
  const list = { ...base }

  Object.keys(next).forEach((tag) => {
    list[tag] = unique((list[tag] || []).concat(next[tag] || []))
  })

  return list
}

export function createXssOptions(api: XssApi, options: MdrdOptions) {
  const user = options.sanitize?.xss || {}
  const allowList = user.allowList as XssWhiteList | undefined
  const whiteList = user.whiteList as XssWhiteList | undefined

  if (allowList) {
    return {
      ...user,
      allowCommentTag: false,
      stripIgnoreTagBody: ['script', 'style'],
      allowList: merge(defaults(api), allowList),
    }
  }

  return {
    ...user,
    allowCommentTag: false,
    stripIgnoreTagBody: ['script', 'style'],
    whiteList: merge(defaults(api), whiteList),
  }
}
