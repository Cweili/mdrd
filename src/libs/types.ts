import type { KatexOptions } from 'katex'
import type { MarkedOptions } from 'marked'

export type XssWhiteList = Record<string, string[]>

export interface MdrdSanitizeOptions {
  enabled?: boolean
  xss?: {
    whiteList?: XssWhiteList
    allowList?: XssWhiteList
    stripIgnoreTag?: boolean
    stripIgnoreTagBody?: boolean | string[]
    allowCommentTag?: boolean
    css?: false | Record<string, unknown>
    [key: string]: unknown
  }
}

export interface MdrdOptions {
  marked?: MarkedOptions
  katex?: KatexOptions
  sanitize?: MdrdSanitizeOptions
  cdn?: {
    prefix?: string
    libs?: {
      marked?: string
      prismjs?: string
      katex?: string
      mermaid?: string
      xss?: string
    }
  }
}
