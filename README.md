# mdrd

[![npm][badge-version]][npm]
[![bundle size][badge-size]][bundlephobia]
[![npm downloads][badge-downloads]][npm]
[![license][badge-license]][license]


[![github][badge-issues]][github]
[![build][badge-build]][workflows]
[![coverage][badge-coverage]][coveralls]

Render markdown with code highlighting, katex, mermaid.

* Rendering markdown in WebWorkers
* Automatically load libraries used from CDN dynamically
* Code highlighting, katex, mermaid included
* React component supported

[Documents and examples][doc].

## Installation

```shell
npm install mdrd
```

## Usage

#### Markdown renderer

```js
import mdrd from 'mdrd'

const mdrdOptions = {
  katex: {},
  marked: {},
  sanitize: {
    enabled: true,
  },
  cdn: {
    prefix: 'https://cdn.jsdelivr.net/npm/',
    libs: {
      marked: 'marked@9.1.2/lib/marked.umd.min.js',
      prismjs: 'prismjs@1.29.0/components/prism-core.min.js',
      katex: 'katex@0.16.9/dist/katex.min.js',
      mermaid: 'mermaid@10.5.1/dist/mermaid.min.js',
      xss: 'xss@1.0.15/dist/xss.min.js',
    },
  },
}
const renderMarkdown = mdrd(mdrdOptions)
const content = '# hello world'
const html = await renderMarkdown(content)
const htmlWithMermaid = await renderMarkdown.mermaid(content, html)
```

#### React component

```jsx
import { MdView } from 'mdrd/react'

function ReactComponent() {
  const mdrdOptions = {}
  return (
    <MdView
      options={mdrdOptions}
      copy
    >
      # hello world
    </MdView>
  )
}
```

#### Options

* `katex`: [Katex options](https://katex.org/docs/options)
* `marked`: [Marked options](https://marked.js.org/using_advanced#options)
* `sanitize`: worker-side sanitize options powered by `xss`
* `cdn`: CDN options

Default options:

```js
const libsMinVersion = process .env .NODE_ENV === 'development' ? '' : '.min'
const defaultOptions = {
  katex: {},
  marked: {},
  sanitize: {
    enabled: false,
    xss: {},
  },
  cdn: {
    prefix: 'https://cdn.jsdelivr.net/npm/',
    libs: {
      marked: `marked@9.1.2/lib/marked.umd${libsMinVersion}.js`,
      prismjs: `prismjs@1.29.0/components/prism-core${libsMinVersion}.js`,
      katex: `katex@0.16.9/dist/katex${libsMinVersion}.js`,
      mermaid: `mermaid@10.5.1/dist/mermaid${libsMinVersion}.js`,
      xss: `xss@1.0.15/dist/xss${libsMinVersion}.js`,
    },
  },
}
```

When `sanitize.enabled` is `true`, the worker sanitizes markdown HTML with `xss` before posting it back to the main thread. Mermaid output is unchanged in this first phase and is not sanitized again after it is appended.

[doc]: https://cweili.github.io/mdrd/

[badge-version]: https://img.shields.io/npm/v/mdrd.svg
[badge-downloads]: https://img.shields.io/npm/dt/mdrd.svg
[npm]: https://www.npmjs.com/package/mdrd

[badge-size]: https://img.shields.io/bundlephobia/minzip/mdrd.svg
[bundlephobia]: https://bundlephobia.com/result?p=mdrd

[badge-license]: https://img.shields.io/npm/l/mdrd.svg
[license]: https://github.com/Cweili/mdrd/blob/master/LICENSE

[badge-issues]: https://img.shields.io/github/issues/Cweili/mdrd.svg
[github]: https://github.com/Cweili/mdrd

[badge-build]: https://img.shields.io/github/actions/workflow/status/Cweili/mdrd/test.yml?branch=master
[workflows]: https://github.com/Cweili/mdrd/actions/workflows/test.yml?query=branch%3Amaster

[badge-coverage]: https://img.shields.io/coveralls/github/Cweili/mdrd/master.svg
[coveralls]: https://coveralls.io/github/Cweili/mdrd?branch=master
