import{M as s}from"./MdViewer-70d63e15.js";import"./index-9edec130.js";import"./_commonjsHelpers-de833af9.js";const r=a=>new Promise(o=>{setTimeout(o,a)}),m={title:"MdViewer",component:s,parameters:{layout:"centered"}},n={name:"Basic Usage",args:{children:`# 1. Headers

# h1
## h2
### h3
#### h4
##### h5
###### h6

# 2. Text blocks

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Text before line break
Text after line break

# 3. Quotes
> quote

>quote
> > nested quote
> - list in quote

# 4. Code blocks

\`\`\`
untyped code block
\`\`\`

\`\`\`
escaped chars in code:
\\\`\`\`
\`\`\`

\`\`\`js
// js code
let a = 0
\`\`\`

\`\`\`python
# python code
print({"a":0})
\`\`\`

\`\`\`mermaid
graph LR
  A[Start] --> B{Condition}
  B -- Yes --> C[Action 1]
  C --> D[Action 2]
  D --> E{Condition 2}
  E -- No --> F[Action 3]
  F --> G[End]
  E -- Yes --> H[Action 4]
  H --> G
  B -- No --> G
\`\`\`

# 5. lists

1. item-1
1. item-1
	1. item-1
	1. item-1
	- item
		- item

- item
	1. item-1
	2. item-2

# 6. Text decoration

*italic*

**bold**

***bold italic***

<u>underscored</u>

~~strikethrough~~

==highlighted==

\`one line code\`

A~subscript~

A^superscript^

# 7. Links

External link: [example.com](http://example.com)

Internal link: [link to h1](#h1)

# 8. Media

image: 

![md-viewer](https://img.shields.io/npm/v/md-viewer.svg)

emoji: ⛺  😂

# 9. Tables

| title | title2 |
| --- | ---- |
| data | data2 |
| more data | more data2 |
| even more data | even more data2 |

# 10. Katex

The general form of a quadratic equation is $ax^2 + bx + c = 0$, where $a$, $b$, and $c$ are known real constants, and $a \\neq 0$. The roots of the quadratic equation can be obtained using the following formula:

$$
x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
$$

Here, the symbol $\\pm$ represents the two possible roots, one with a positive sign and the other with a negative sign. $\\sqrt{b^2 - 4ac}$ is called the discriminant, which determines the type and number of roots.

- When the discriminant $b^2 - 4ac$ is greater than zero, the equation has two distinct real roots.
- When the discriminant $b^2 - 4ac$ is equal to zero, the equation has two equal real roots.
- When the discriminant $b^2 - 4ac$ is less than zero, the equation has no real roots but has two complex conjugate roots.

Please note that the coefficients $a$, $b$, and $c$ in the quadratic formula are the coefficients of the quadratic equation. By substituting specific numerical values, you can calculate the values of the roots.

# 11. other
## 11.1 Escaped special symbols

\\\\
\\\`
\\*
\\_
\\{ \\}
\\[ \\]
\\< \\>
\\( \\)
\\#
\\+
\\-
\\.
\\!
\\|

## 11.2 Hline

---

---

---

# 12. html

<h2> H2 header </h2>


<p> # This Markdown inside "p" tag should stay intact </p>

html image inside text block <img src="https://img.shields.io/npm/v/md-viewer.svg" style="width:150px"> like that

**The jsdelivr homepage of this project. Embedded as an iframe**
<iframe style="width:100%; height:315px" src="https://www.jsdelivr.com/package/npm/md-viewer" title="md-viewer" frameborder="0"></iframe>`},async play(){await r(5e3)}};var e,t,i;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:'{\n  name: \'Basic Usage\',\n  args: {\n    children: \'# 1. Headers\\n\\n# h1\\n## h2\\n### h3\\n#### h4\\n##### h5\\n###### h6\\n\\n# 2. Text blocks\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n\\nText before line break\\nText after line break\\n\\n# 3. Quotes\\n> quote\\n\\n>quote\\n> > nested quote\\n> - list in quote\\n\\n# 4. Code blocks\\n\\n```\\nuntyped code block\\n```\\n\\n```\\nescaped chars in code:\\n\\\\```\\n```\\n\\n```js\\n// js code\\nlet a = 0\\n```\\n\\n```python\\n# python code\\nprint({"a":0})\\n```\\n\\n```mermaid\\ngraph LR\\n  A[Start] --> B{Condition}\\n  B -- Yes --> C[Action 1]\\n  C --> D[Action 2]\\n  D --> E{Condition 2}\\n  E -- No --> F[Action 3]\\n  F --> G[End]\\n  E -- Yes --> H[Action 4]\\n  H --> G\\n  B -- No --> G\\n```\\n\\n# 5. lists\\n\\n1. item-1\\n1. item-1\\n\\t1. item-1\\n\\t1. item-1\\n\\t- item\\n\\t\\t- item\\n\\n- item\\n\\t1. item-1\\n\\t2. item-2\\n\\n# 6. Text decoration\\n\\n*italic*\\n\\n**bold**\\n\\n***bold italic***\\n\\n<u>underscored</u>\\n\\n~~strikethrough~~\\n\\n==highlighted==\\n\\n`one line code`\\n\\nA~subscript~\\n\\nA^superscript^\\n\\n# 7. Links\\n\\nExternal link: [example.com](http://example.com)\\n\\nInternal link: [link to h1](#h1)\\n\\n# 8. Media\\n\\nimage: \\n\\n![md-viewer](https://img.shields.io/npm/v/md-viewer.svg)\\n\\nemoji: ⛺  😂\\n\\n# 9. Tables\\n\\n| title | title2 |\\n| --- | ---- |\\n| data | data2 |\\n| more data | more data2 |\\n| even more data | even more data2 |\\n\\n# 10. Katex\\n\\nThe general form of a quadratic equation is $ax^2 + bx + c = 0$, where $a$, $b$, and $c$ are known real constants, and $a \\\\neq 0$. The roots of the quadratic equation can be obtained using the following formula:\\n\\n$$\\nx = \\\\frac{-b \\\\pm \\\\sqrt{b^2 - 4ac}}{2a}\\n$$\\n\\nHere, the symbol $\\\\pm$ represents the two possible roots, one with a positive sign and the other with a negative sign. $\\\\sqrt{b^2 - 4ac}$ is called the discriminant, which determines the type and number of roots.\\n\\n- When the discriminant $b^2 - 4ac$ is greater than zero, the equation has two distinct real roots.\\n- When the discriminant $b^2 - 4ac$ is equal to zero, the equation has two equal real roots.\\n- When the discriminant $b^2 - 4ac$ is less than zero, the equation has no real roots but has two complex conjugate roots.\\n\\nPlease note that the coefficients $a$, $b$, and $c$ in the quadratic formula are the coefficients of the quadratic equation. By substituting specific numerical values, you can calculate the values of the roots.\\n\\n# 11. other\\n## 11.1 Escaped special symbols\\n\\n\\\\\\\\\\n\\\\`\\n\\\\*\\n\\\\_\\n\\\\{ \\\\}\\n\\\\[ \\\\]\\n\\\\< \\\\>\\n\\\\( \\\\)\\n\\\\#\\n\\\\+\\n\\\\-\\n\\\\.\\n\\\\!\\n\\\\|\\n\\n## 11.2 Hline\\n\\n---\\n\\n---\\n\\n---\\n\\n# 12. html\\n\\n<h2> H2 header </h2>\\n\\n\\n<p> # This Markdown inside "p" tag should stay intact </p>\\n\\nhtml image inside text block <img src="https://img.shields.io/npm/v/md-viewer.svg" style="width:150px"> like that\\n\\n**The jsdelivr homepage of this project. Embedded as an iframe**\\n<iframe style="width:100%; height:315px" src="https://www.jsdelivr.com/package/npm/md-viewer" title="md-viewer" frameborder="0"></iframe>\'\n  },\n  async play() {\n    await sleep(5000);\n  }\n}',...(i=(t=n.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const h=["BasicMdViewer"];export{n as BasicMdViewer,h as __namedExportsOrder,m as default};
//# sourceMappingURL=MdViewer.stories-b24d2f8f.js.map
