import{r as rr}from"./index-9edec130.js";import{u as nr}from"./index-b9251d92.js";import{M as tr}from"./MdViewer-70d63e15.js";import"./_commonjsHelpers-de833af9.js";var we={exports:{}},U={};/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var g=rr,m=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),X=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),K=Symbol.iterator,Re="@@iterator";function _e(e){if(e===null||typeof e!="object")return null;var r=K&&e[K]||e[Re];return typeof r=="function"?r:null}var h=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];ke("error",e,n)}}function ke(e,r,n){{var t=h.ReactDebugCurrentFrame,o=t.getStackAddendum();o!==""&&(r+="%s",n=n.concat([o]));var s=n.map(function(i){return String(i)});s.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,s)}}var je=!1,Ce=!1,Te=!1,xe=!1,Oe=!1,q;q=Symbol.for("react.module.reference");function Pe(e){return!!(typeof e=="string"||typeof e=="function"||e===k||e===B||Oe||e===z||e===D||e===M||xe||e===ye||je||Ce||Te||typeof e=="object"&&e!==null&&(e.$$typeof===F||e.$$typeof===C||e.$$typeof===G||e.$$typeof===X||e.$$typeof===j||e.$$typeof===q||e.getModuleId!==void 0))}function Se(e,r,n){var t=e.displayName;if(t)return t;var o=r.displayName||r.name||"";return o!==""?n+"("+o+")":n}function H(e){return e.displayName||"Context"}function v(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case Ee:return"Portal";case B:return"Profiler";case z:return"StrictMode";case D:return"Suspense";case M:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case X:var r=e;return H(r)+".Consumer";case G:var n=e;return H(n._context)+".Provider";case j:return Se(e,e.render,"ForwardRef");case C:var t=e.displayName||null;return t!==null?t:v(e.type)||"Memo";case F:{var o=e,s=o._payload,i=o._init;try{return v(i(s))}catch{return null}}}return null}var b=Object.assign,R=0,J,Z,Q,ee,re,ne,te;function ae(){}ae.__reactDisabledLog=!0;function De(){{if(R===0){J=console.log,Z=console.info,Q=console.warn,ee=console.error,re=console.group,ne=console.groupCollapsed,te=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ae,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}R++}}function Me(){{if(R--,R===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:b({},e,{value:J}),info:b({},e,{value:Z}),warn:b({},e,{value:Q}),error:b({},e,{value:ee}),group:b({},e,{value:re}),groupCollapsed:b({},e,{value:ne}),groupEnd:b({},e,{value:te})})}R<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var A=h.ReactCurrentDispatcher,V;function T(e,r,n){{if(V===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);V=t&&t[1]||""}return`
`+V+e}}var $=!1,x;{var Fe=typeof WeakMap=="function"?WeakMap:Map;x=new Fe}function ie(e,r){if(!e||$)return"";{var n=x.get(e);if(n!==void 0)return n}var t;$=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=A.current,A.current=null,De();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(p){t=p}Reflect.construct(e,[],i)}else{try{i.call()}catch(p){t=p}e.call(i.prototype)}}else{try{throw Error()}catch(p){t=p}e()}}catch(p){if(p&&t&&typeof p.stack=="string"){for(var a=p.stack.split(`
`),f=t.stack.split(`
`),u=a.length-1,l=f.length-1;u>=1&&l>=0&&a[u]!==f[l];)l--;for(;u>=1&&l>=0;u--,l--)if(a[u]!==f[l]){if(u!==1||l!==1)do if(u--,l--,l<0||a[u]!==f[l]){var d=`
`+a[u].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),typeof e=="function"&&x.set(e,d),d}while(u>=1&&l>=0);break}}}finally{$=!1,A.current=s,Me(),Error.prepareStackTrace=o}var E=e?e.displayName||e.name:"",ge=E?T(E):"";return typeof e=="function"&&x.set(e,ge),ge}function Ae(e,r,n){return ie(e,!1)}function Ve(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function O(e,r,n){if(e==null)return"";if(typeof e=="function")return ie(e,Ve(e));if(typeof e=="string")return T(e);switch(e){case D:return T("Suspense");case M:return T("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case j:return Ae(e.render);case C:return O(e.type,r,n);case F:{var t=e,o=t._payload,s=t._init;try{return O(s(o),r,n)}catch{}}}return""}var P=Object.prototype.hasOwnProperty,oe={},se=h.ReactDebugCurrentFrame;function S(e){if(e){var r=e._owner,n=O(e.type,e._source,r?r.type:null);se.setExtraStackFrame(n)}else se.setExtraStackFrame(null)}function $e(e,r,n,t,o){{var s=Function.call.bind(P);for(var i in e)if(s(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var f=Error((t||"React class")+": "+n+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw f.name="Invariant Violation",f}a=e[i](r,i,t,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(u){a=u}a&&!(a instanceof Error)&&(S(o),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",t||"React class",n,i,typeof a),S(null)),a instanceof Error&&!(a.message in oe)&&(oe[a.message]=!0,S(o),c("Failed %s type: %s",n,a.message),S(null))}}}var Ne=Array.isArray;function N(e){return Ne(e)}function Ie(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,n=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function We(e){try{return ue(e),!1}catch{return!0}}function ue(e){return""+e}function le(e){if(We(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ie(e)),ue(e)}var _=h.ReactCurrentOwner,Ye={key:!0,ref:!0,__self:!0,__source:!0},ce,fe,I;I={};function Le(e){if(P.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Ue(e){if(P.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function ze(e,r){if(typeof e.ref=="string"&&_.current&&r&&_.current.stateNode!==r){var n=v(_.current.type);I[n]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',v(_.current.type),e.ref),I[n]=!0)}}function Be(e,r){{var n=function(){ce||(ce=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}}function Ge(e,r){{var n=function(){fe||(fe=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}}var Xe=function(e,r,n,t,o,s,i){var a={$$typeof:m,type:e,key:r,ref:n,props:i,_owner:s};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:t}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function Ke(e,r,n,t,o){{var s,i={},a=null,f=null;n!==void 0&&(le(n),a=""+n),Ue(r)&&(le(r.key),a=""+r.key),Le(r)&&(f=r.ref,ze(r,o));for(s in r)P.call(r,s)&&!Ye.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps){var u=e.defaultProps;for(s in u)i[s]===void 0&&(i[s]=u[s])}if(a||f){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&Be(i,l),f&&Ge(i,l)}return Xe(e,a,f,o,t,_.current,i)}}var W=h.ReactCurrentOwner,de=h.ReactDebugCurrentFrame;function w(e){if(e){var r=e._owner,n=O(e.type,e._source,r?r.type:null);de.setExtraStackFrame(n)}else de.setExtraStackFrame(null)}var Y;Y=!1;function L(e){return typeof e=="object"&&e!==null&&e.$$typeof===m}function me(){{if(W.current){var e=v(W.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function qe(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),n=e.lineNumber;return`

Check your code at `+r+":"+n+"."}return""}}var ve={};function He(e){{var r=me();if(!r){var n=typeof e=="string"?e:e.displayName||e.name;n&&(r=`

Check the top-level render call using <`+n+">.")}return r}}function pe(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var n=He(r);if(ve[n])return;ve[n]=!0;var t="";e&&e._owner&&e._owner!==W.current&&(t=" It was passed a child from "+v(e._owner.type)+"."),w(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,t),w(null)}}function be(e,r){{if(typeof e!="object")return;if(N(e))for(var n=0;n<e.length;n++){var t=e[n];L(t)&&pe(t,r)}else if(L(e))e._store&&(e._store.validated=!0);else if(e){var o=_e(e);if(typeof o=="function"&&o!==e.entries)for(var s=o.call(e),i;!(i=s.next()).done;)L(i.value)&&pe(i.value,r)}}}function Je(e){{var r=e.type;if(r==null||typeof r=="string")return;var n;if(typeof r=="function")n=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===j||r.$$typeof===C))n=r.propTypes;else return;if(n){var t=v(r);$e(n,e.props,"prop",t,e)}else if(r.PropTypes!==void 0&&!Y){Y=!0;var o=v(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ze(e){{for(var r=Object.keys(e.props),n=0;n<r.length;n++){var t=r[n];if(t!=="children"&&t!=="key"){w(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",t),w(null);break}}e.ref!==null&&(w(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),w(null))}}function Qe(e,r,n,t,o,s){{var i=Pe(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var f=qe(o);f?a+=f:a+=me();var u;e===null?u="null":N(e)?u="array":e!==void 0&&e.$$typeof===m?(u="<"+(v(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):u=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",u,a)}var l=Ke(e,r,n,o,s);if(l==null)return l;if(i){var d=r.children;if(d!==void 0)if(t)if(N(d)){for(var E=0;E<d.length;E++)be(d[E],e);Object.freeze&&Object.freeze(d)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else be(d,e)}return e===k?Ze(l):Je(l),l}}var er=Qe;U.Fragment=k,U.jsxDEV=er})();we.exports=U;var y=we.exports;const ar=`# MdViewer\r
\r
[![npm][badge-version]][npm]\r
[![bundle size][badge-size]][bundlephobia]\r
[![npm downloads][badge-downloads]][npm]\r
[![license][badge-license]][license]\r
\r
\r
[![github][badge-issues]][github]\r
[![build][badge-build]][workflows]\r
[![coverage][badge-coverage]][coveralls]\r
\r
View markdown with code highlighting, katex, mermaid.\r
\r
* Rendering markdown in WebWorkers\r
* Automatically load libraries used from CDN dynamically\r
* Code highlighting, katex, mermaid included\r
* React component supported\r
\r
[Documents and examples][doc].\r
\r
## Installation\r
\r
\`\`\`shell\r
npm install md-viewer\r
\`\`\`\r
\r
## Usage\r
\r
#### Markdown renderer\r
\r
\`\`\`js\r
import { markdown } from 'md-viewer'\r
\r
const markdownOptions = {\r
  katex: {},\r
  marked: {},\r
  cdn: {\r
    prefix: 'https://cdn.jsdelivr.net/npm/',\r
    libs: {\r
      marked: \`marked@9.1.2/lib/marked.umd.min.js\`,\r
      prismjs: \`prismjs@1.29.0/components/prism-core.min.js\`,\r
      katex: \`katex@0.16.9/dist/katex.min.js\`,\r
      mermaid: \`mermaid@10.5.1/dist/mermaid.min.js\`,\r
    },\r
  },\r
}\r
const renderMarkdown = markdown(markdownOptions)\r
const content = '# hello world'\r
const html = await renderMarkdown(content)\r
const htmlWithMermaid = await renderMarkdown.mermaid(content, html)\r
\`\`\`\r
\r
#### React component\r
\r
\`\`\`jsx\r
import { MdViewer } from 'md-viewer'\r
\r
function ReactComponent() {\r
  const markdownOptions = {}\r
  return (\r
    <MdViewer options={markdownOptions}>\r
      # hello world\r
    </MdViewer>\r
  )\r
}\r
\`\`\`\r
\r
#### Options\r
\r
* \`katex\`: [Katex options](https://katex.org/docs/options)\r
* \`marked\`: [Marked options](https://marked.js.org/using_advanced#options)\r
* \`cdn\`: CDN options\r
\r
Default options:\r
\r
\`\`\`js\r
const libsMinVersion = process .env .NODE_ENV === 'development' ? '' : '.min'\r
const defaultOptions = {\r
  katex: {},\r
  marked: {},\r
  cdn: {\r
    prefix: 'https://cdn.jsdelivr.net/npm/',\r
    libs: {\r
      marked: \`marked@9.1.2/lib/marked.umd\${libsMinVersion}.js\`,\r
      prismjs: \`prismjs@1.29.0/components/prism-core\${libsMinVersion}.js\`,\r
      katex: \`katex@0.16.9/dist/katex\${libsMinVersion}.js\`,\r
      mermaid: \`mermaid@10.5.1/dist/mermaid\${libsMinVersion}.js\`,\r
    },\r
  },\r
}\r
\`\`\`\r
\r
[doc]: https://cweili.github.io/md-viewer/\r
\r
[badge-version]: https://img.shields.io/npm/v/md-viewer.svg\r
[badge-downloads]: https://img.shields.io/npm/dt/md-viewer.svg\r
[npm]: https://www.npmjs.com/package/md-viewer\r
\r
[badge-size]: https://img.shields.io/bundlephobia/minzip/md-viewer.svg\r
[bundlephobia]: https://bundlephobia.com/result?p=md-viewer\r
\r
[badge-license]: https://img.shields.io/npm/l/md-viewer.svg\r
[license]: https://github.com/Cweili/md-viewer/blob/master/LICENSE\r
\r
[badge-issues]: https://img.shields.io/github/issues/Cweili/md-viewer.svg\r
[github]: https://github.com/Cweili/md-viewer\r
\r
[badge-build]: https://img.shields.io/github/actions/workflow/status/Cweili/md-viewer/ci.yml?branch=master\r
[workflows]: https://github.com/Cweili/md-viewer/actions/workflows/ci.yml?query=branch%3Amaster\r
\r
[badge-coverage]: https://img.shields.io/coveralls/github/Cweili/md-viewer/master.svg\r
[coveralls]: https://coveralls.io/github/Cweili/md-viewer?branch=master\r
`;function he(g){return y.jsxDEV(y.Fragment,{children:[y.jsxDEV("style",{children:`pre{${Object.entries({padding:"16px",background:"#f6f8fa",border:"1px solid #ddd","border-radius":"6px",margin:".5em 0"}).map(m=>`${m[0]}:${m[1]} !important;`).join("")}}`},void 0,!1,{fileName:"<source.js>",lineNumber:5,columnNumber:1},this),`
`,y.jsxDEV(tr,{children:ar},void 0,!1,{fileName:"<source.js>",lineNumber:19,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}function lr(g={}){const{wrapper:m}=Object.assign({},nr(),g.components);return m?y.jsxDEV(m,Object.assign({},g,{children:y.jsxDEV(he,g,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):he()}export{lr as default};
//# sourceMappingURL=README-799509ca.js.map
