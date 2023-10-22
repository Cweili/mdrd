/* eslint-disable camelcase, max-len, no-multi-assign, no-param-reassign, no-plusplus, no-unused-expressions, no-use-before-define */

/**
 * The dependencies map is built automatically with gulp.
 *
 * @type {Object<string, string | string[]>}
 */
const lang_dependencies = /* dependencies_placeholder[ */{
  javascript: 'clike',
  actionscript: 'javascript',
  apex: [
    'clike',
    'sql',
  ],
  arduino: 'cpp',
  aspnet: [
    'markup',
    'csharp',
  ],
  birb: 'clike',
  bison: 'c',
  c: 'clike',
  csharp: 'clike',
  cpp: 'c',
  cfscript: 'clike',
  chaiscript: [
    'clike',
    'cpp',
  ],
  cilkc: 'c',
  cilkcpp: 'cpp',
  coffeescript: 'javascript',
  crystal: 'ruby',
  'css-extras': 'css',
  d: 'clike',
  dart: 'clike',
  django: 'markup-templating',
  ejs: [
    'javascript',
    'markup-templating',
  ],
  etlua: [
    'lua',
    'markup-templating',
  ],
  erb: [
    'ruby',
    'markup-templating',
  ],
  fsharp: 'clike',
  'firestore-security-rules': 'clike',
  flow: 'javascript',
  ftl: 'markup-templating',
  gml: 'clike',
  glsl: 'c',
  go: 'clike',
  gradle: 'clike',
  groovy: 'clike',
  haml: 'ruby',
  handlebars: 'markup-templating',
  haxe: 'clike',
  hlsl: 'c',
  idris: 'haskell',
  java: 'clike',
  javadoc: [
    'markup',
    'java',
    'javadoclike',
  ],
  jolie: 'clike',
  jsdoc: [
    'javascript',
    'javadoclike',
    'typescript',
  ],
  'js-extras': 'javascript',
  json5: 'json',
  jsonp: 'json',
  'js-templates': 'javascript',
  kotlin: 'clike',
  latte: [
    'clike',
    'markup-templating',
    'php',
  ],
  less: 'css',
  lilypond: 'scheme',
  liquid: 'markup-templating',
  markdown: 'markup',
  'markup-templating': 'markup',
  mongodb: 'javascript',
  n4js: 'javascript',
  objectivec: 'c',
  opencl: 'c',
  parser: 'markup',
  php: 'markup-templating',
  phpdoc: [
    'php',
    'javadoclike',
  ],
  'php-extras': 'php',
  plsql: 'sql',
  processing: 'clike',
  protobuf: 'clike',
  pug: [
    'markup',
    'javascript',
  ],
  purebasic: 'clike',
  purescript: 'haskell',
  qsharp: 'clike',
  qml: 'javascript',
  qore: 'clike',
  racket: 'scheme',
  cshtml: [
    'markup',
    'csharp',
  ],
  jsx: [
    'markup',
    'javascript',
  ],
  tsx: [
    'jsx',
    'typescript',
  ],
  reason: 'clike',
  ruby: 'clike',
  sass: 'css',
  scss: 'css',
  scala: 'java',
  'shell-session': 'bash',
  smarty: 'markup-templating',
  solidity: 'clike',
  soy: 'markup-templating',
  sparql: 'turtle',
  sqf: 'clike',
  squirrel: 'clike',
  stata: [
    'mata',
    'java',
    'python',
  ],
  't4-cs': [
    't4-templating',
    'csharp',
  ],
  't4-vb': [
    't4-templating',
    'vbnet',
  ],
  tap: 'yaml',
  tt2: [
    'clike',
    'markup-templating',
  ],
  textile: 'markup',
  twig: 'markup-templating',
  typescript: 'javascript',
  v: 'clike',
  vala: 'clike',
  vbnet: 'basic',
  velocity: 'markup',
  wiki: 'markup',
  xeora: 'markup',
  'xml-doc': 'markup',
  xquery: 'markup',
}/* ] */

const lang_aliases = /* aliases_placeholder[ */{
  html: 'markup',
  xml: 'markup',
  svg: 'markup',
  mathml: 'markup',
  ssml: 'markup',
  atom: 'markup',
  rss: 'markup',
  js: 'javascript',
  g4: 'antlr4',
  ino: 'arduino',
  'arm-asm': 'armasm',
  art: 'arturo',
  adoc: 'asciidoc',
  avs: 'avisynth',
  avdl: 'avro-idl',
  gawk: 'awk',
  sh: 'bash',
  shell: 'bash',
  shortcode: 'bbcode',
  rbnf: 'bnf',
  oscript: 'bsl',
  cs: 'csharp',
  dotnet: 'csharp',
  cfc: 'cfscript',
  'cilk-c': 'cilkc',
  'cilk-cpp': 'cilkcpp',
  cilk: 'cilkcpp',
  coffee: 'coffeescript',
  conc: 'concurnas',
  jinja2: 'django',
  'dns-zone': 'dns-zone-file',
  dockerfile: 'docker',
  gv: 'dot',
  eta: 'ejs',
  xlsx: 'excel-formula',
  xls: 'excel-formula',
  gamemakerlanguage: 'gml',
  po: 'gettext',
  gni: 'gn',
  ld: 'linker-script',
  'go-mod': 'go-module',
  hbs: 'handlebars',
  mustache: 'handlebars',
  hs: 'haskell',
  idr: 'idris',
  gitignore: 'ignore',
  hgignore: 'ignore',
  npmignore: 'ignore',
  webmanifest: 'json',
  kt: 'kotlin',
  kts: 'kotlin',
  kum: 'kumir',
  tex: 'latex',
  context: 'latex',
  ly: 'lilypond',
  emacs: 'lisp',
  elisp: 'lisp',
  'emacs-lisp': 'lisp',
  md: 'markdown',
  moon: 'moonscript',
  n4jsd: 'n4js',
  nani: 'naniscript',
  objc: 'objectivec',
  qasm: 'openqasm',
  objectpascal: 'pascal',
  px: 'pcaxis',
  pcode: 'peoplecode',
  plantuml: 'plant-uml',
  pq: 'powerquery',
  mscript: 'powerquery',
  pbfasm: 'purebasic',
  purs: 'purescript',
  py: 'python',
  qs: 'qsharp',
  rkt: 'racket',
  razor: 'cshtml',
  rpy: 'renpy',
  res: 'rescript',
  robot: 'robotframework',
  rb: 'ruby',
  'sh-session': 'shell-session',
  shellsession: 'shell-session',
  smlnj: 'sml',
  sol: 'solidity',
  sln: 'solution-file',
  rq: 'sparql',
  sclang: 'supercollider',
  t4: 't4-cs',
  trickle: 'tremor',
  troy: 'tremor',
  trig: 'turtle',
  ts: 'typescript',
  tsconfig: 'typoscript',
  uscript: 'unrealscript',
  uc: 'unrealscript',
  url: 'uri',
  vb: 'visual-basic',
  vba: 'visual-basic',
  webidl: 'web-idl',
  mathematica: 'wolfram',
  nb: 'wolfram',
  wl: 'wolfram',
  xeoracube: 'xeora',
  yml: 'yaml',
}/* ] */

/**
 * @typedef LangDataItem
 * @property {{ success?: () => void, error?: () => void }[]} callbacks
 * @property {boolean} [error]
 * @property {boolean} [loading]
 */
/** @type {Object<string, LangDataItem>} */
const lang_data = {}

export default function loadLanguageComponent(Prism, language, loadComponent) {
  /**
   * Returns whether the given language is currently loaded.
   *
   * @param {string} lang
   * @returns {boolean}
   */
  function isLoaded(lang) {
    if (lang.indexOf('!') >= 0) {
    // forced reload
      return false
    }

    lang = lang_aliases[lang] || lang // resolve alias

    if (lang in Prism.languages) {
    // the given language is already loaded
      return true
    }

    // this will catch extensions like CSS extras that don't add a grammar to Prism.languages
    const data = lang_data[lang]
    return data && !data.error && data.loading === false
  }

  /**
   * Loads all given grammars concurrently.
   *
   * @param {string[]|string} languages
   * @param {(languages: string[]) => void} [success]
   * @param {(language: string) => void} [error] This callback will be invoked on the first language to fail.
   */
  function loadLanguages(languages, success, error) {
    if (typeof languages === 'string') {
      languages = [languages]
    }

    const total = languages.length
    let completed = 0
    let failed = false

    if (total === 0) {
      if (success) {
        setTimeout(success, 0)
      }
      return
    }

    function successCallback() {
      if (failed) {
        return
      }
      completed++
      if (completed === total) {
        success && success(languages)
      }
    }

    languages.forEach((lang) => {
      loadLanguage(lang, successCallback, () => {
        if (failed) {
          return
        }
        failed = true
        error && error(lang)
      })
    })
  }

  /**
   * Loads a grammar with its dependencies.
   *
   * @param {string} lang
   * @param {() => void} [success]
   * @param {() => void} [error]
   */
  function loadLanguage(lang, success, error) {
    const force = lang.indexOf('!') >= 0

    lang = lang.replace('!', '')
    lang = lang_aliases[lang] || lang

    function load() {
      let data = lang_data[lang]
      if (!data) {
        data = lang_data[lang] = {
          callbacks: [],
        }
      }
      data.callbacks.push({
        success,
        error,
      })

      if (!force && isLoaded(lang)) {
      // the language is already loaded and we aren't forced to reload
        languageCallback(lang, 'success')
      } else if (!force && data.error) {
      // the language failed to load before and we don't reload
        languageCallback(lang, 'error')
      } else if (force || !data.loading) {
      // the language isn't currently loading and/or we are forced to reload
        data.loading = true
        data.error = false

        loadComponent(lang).then(() => {
          data.loading = false
          languageCallback(lang, 'success')
        }, () => {
          data.loading = false
          data.error = true
          languageCallback(lang, 'error')
        })
      }
    }

    const dependencies = lang_dependencies[lang]
    if (dependencies && dependencies.length) {
      loadLanguages(dependencies, load, error)
    } else {
      load()
    }
  }

  /**
   * Runs all callbacks of the given type for the given language.
   *
   * @param {string} lang
   * @param {"success" | "error"} type
   */
  function languageCallback(lang, type) {
    if (lang_data[lang]) {
      const { callbacks } = lang_data[lang]
      for (let i = 0, l = callbacks.length; i < l; i++) {
        const callback = callbacks[i][type]
        if (callback) {
          setTimeout(callback, 0)
        }
      }
      callbacks.length = 0
    }
  }

  return new Promise((resolve, reject) => {
    loadLanguage(language, resolve, reject)
  })
}
