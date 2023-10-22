import type { KatexOptions } from 'katex'
import type { MarkedOptions } from 'marked'

export interface MarkdownOptions {
  marked?: MarkedOptions
  katex?: KatexOptions
  cdn?: {
    prefix?: string
    libs?: {
      marked?: string
      prismjs?: string
      katex?: string
      mermaid?: string
    }
  }
}
