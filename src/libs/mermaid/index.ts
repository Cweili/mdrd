import type { Mermaid } from 'mermaid'

import type {
  MdrdOptions,
} from '../types'

import {
  loadScript,
} from '../utils'

const regex = /```mermaid([\S\s]+?)```/g
const context: {
  mermaid?: Mermaid
} = {}
async function getMermaid(options: MdrdOptions) {
  let { mermaid } = context
  if (!mermaid) {
    await loadScript(options.cdn!.libs!.mermaid, options.cdn!.prefix, context)
    mermaid = context.mermaid
  }
  return mermaid!
}

export default function configMermaid(options: MdrdOptions) {
  return async function renderMermaid(text: string, html: string) {
    const mermaids = text.match(regex)
    let result = html
    if (mermaids) {
      const mermaid = await getMermaid(options)
      const mermaidGraphs = await Promise.all(
        mermaids.map(
          (src) => mermaid.render(`mermaid${`${Math.random()}`.substr(2)}`, src.replace(regex, '$1'))
            .then((renderResult) => renderResult.svg)
            .catch((err) => console.error(err)),
        ),
      )
      result = result.replace(
        /(<pre><code class="language-mermaid">[\S\s]+?<\/code><\/pre>)/g,
        ($0, $1) => `${$1}<p>${mermaidGraphs.shift() || ''}</p>`,
      )
    }
    return result
  }
}
