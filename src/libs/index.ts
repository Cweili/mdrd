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
  q: {
    t: string,
    r: (html: string) => void,
  }[],
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
      q: [],
    }
    workers[workerKey] = worker
    worker.w.postMessage(opts)
    worker.w.addEventListener('message', (event: MessageEvent) => {
      worker.q.shift()?.r(event.data)
    })
  }
  function send(text: string) {
    setTimeout(() => {
      worker.w.postMessage(text)
    }, 0)
  }
  const renderMarkdown = (text: string) => new Promise<string>((res) => {
    if (text) {
      if (!worker.q[0]) {
        send(text)
      }
      worker.q.push({
        t: text,
        r(html: string) {
          if (worker.q[0]) {
            send(worker.q[0].t)
          }
          res(html)
        },
      })
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
