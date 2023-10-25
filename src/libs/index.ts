// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MdWorker from './worker?worker&inline'
import mermaid from './mermaid'
import type { MdrdOptions } from './types'

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

const workers: Record<string, {
  w: MdWorker
  r: ((html: string) => void)[]
}> = {}
export default function markdown(options: MdrdOptions = defaultOptions) {
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
  const workerKey = JSON.stringify(opts)
  let worker = workers[workerKey]
  if (!worker) {
    worker = {
      w: new MdWorker(),
      r: [],
    }
    workers[workerKey] = worker
    worker.w.postMessage(opts)
    worker.w.addEventListener('message', (event: MessageEvent) => {
      worker.r.shift()?.(event.data)
    })
  }
  const renderMarkdown = (text: string) => new Promise<string>((res) => {
    if (text) {
      worker.r.push(res)
      setTimeout(() => {
        worker.w.postMessage(text)
      }, 0)
    } else {
      res(text)
    }
  })
  renderMarkdown.mermaid = mermaid(options)
  return renderMarkdown
}

export type {
  MdrdOptions,
}
