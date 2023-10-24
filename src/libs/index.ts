// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MdWorker from './worker?worker&inline'
import mermaid from './mermaid'
import type { MarkdownOptions } from './types'

const libsMinVersion = process.env.NODE_ENV === 'development' ? '' : '.min'
const defaultOptions = {
  katex: {},
  marked: {},
  cdn: {
    prefix: 'https://cdn.jsdelivr.net/npm/',
    libs: {
      marked: `marked@9.1.2/lib/marked.umd${libsMinVersion}.js`,
      prismjs: `prismjs@1.29.0/components/prism-core${libsMinVersion}.js`,
      katex: `katex@0.16.9/dist/katex${libsMinVersion}.js`,
      mermaid: `mermaid@10.5.1/dist/mermaid${libsMinVersion}.js`,
    },
  },
}

export default function markdown(options: MarkdownOptions = defaultOptions) {
  const opts = {
    ...defaultOptions,
    ...options,
    ...(options.cdn && {
      cdn: {
        ...defaultOptions.cdn,
        ...options.cdn,
        libs: {
          ...defaultOptions.cdn.libs,
          ...options.cdn.libs,
        },
      },
    }),
  }
  const mdWorker = new MdWorker()
  const resolves: ((html: string) => void)[] = []
  const onResolve = (event: MessageEvent) => {
    resolves.shift()?.(event.data)
  }
  mdWorker.postMessage(opts)
  mdWorker.addEventListener('message', onResolve)
  const renderMarkdown = (text: string) => new Promise<string>((res) => {
    if (text) {
      resolves.push(res)
      mdWorker.postMessage(text)
    } else {
      res(text)
    }
  })
  renderMarkdown.mermaid = mermaid(options)
  return renderMarkdown
}

export type {
  MarkdownOptions,
}
