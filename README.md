# MdViewer

[![npm][badge-version]][npm]
[![bundle size][badge-size]][bundlephobia]
[![npm downloads][badge-downloads]][npm]
[![license][badge-license]][license]


[![github][badge-issues]][github]
[![build][badge-build]][workflows]
[![coverage][badge-coverage]][coveralls]

View markdown with code highlighting, katex, mermaid.

* Rendering markdown in WebWorkers
* Automatically load libraries used from CDN dynamically
* Code highlighting, katex, mermaid included
* React component supported

[Documents and examples][doc].

## Installation

```shell
npm install md-viewer
```

## Usage

#### Markdown renderer

```js
import markdown from 'md-viewer'

const markdownOptions = {
  katex: {},
  marked: {},
  cdn: {
    prefix: 'https://cdn.jsdelivr.net/npm/',
    libs: {
      marked: 'marked@9.1.2/lib/marked.umd.min.js',
      prismjs: 'prismjs@1.29.0/components/prism-core.min.js',
      katex: 'katex@0.16.9/dist/katex.min.js',
      mermaid: 'mermaid@10.5.1/dist/mermaid.min.js',
    },
  },
}
const renderMarkdown = markdown(markdownOptions)
const content = '# hello world'
const html = await renderMarkdown(content)
const htmlWithMermaid = await renderMarkdown.mermaid(content, html)
```

#### React component

```jsx
import { MdViewer } from 'md-viewer'

function ReactComponent() {
  const markdownOptions = {}
  return (
    <MdViewer options={markdownOptions}>
      # hello world
    </MdViewer>
  )
}
```

#### Options

* `katex`: [Katex options](https://katex.org/docs/options)
* `marked`: [Marked options](https://marked.js.org/using_advanced#options)
* `cdn`: CDN options

Default options:

```js
const libsMinVersion = process .env .NODE_ENV === 'development' ? '' : '.min'
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
```

[doc]: https://cweili.github.io/md-viewer/

[badge-version]: https://img.shields.io/npm/v/md-viewer.svg
[badge-downloads]: https://img.shields.io/npm/dt/md-viewer.svg
[npm]: https://www.npmjs.com/package/md-viewer

[badge-size]: https://img.shields.io/bundlephobia/minzip/md-viewer.svg
[bundlephobia]: https://bundlephobia.com/result?p=md-viewer

[badge-license]: https://img.shields.io/npm/l/md-viewer.svg
[license]: https://github.com/Cweili/md-viewer/blob/master/LICENSE

[badge-issues]: https://img.shields.io/github/issues/Cweili/md-viewer.svg
[github]: https://github.com/Cweili/md-viewer

[badge-build]: https://img.shields.io/github/actions/workflow/status/Cweili/md-viewer/test.yml?branch=master
[workflows]: https://github.com/Cweili/md-viewer/actions/workflows/test.yml?query=branch%3Amaster

[badge-coverage]: https://img.shields.io/coveralls/github/Cweili/md-viewer/master.svg
[coveralls]: https://coveralls.io/github/Cweili/md-viewer?branch=master
