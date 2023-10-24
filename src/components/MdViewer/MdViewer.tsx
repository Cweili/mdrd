import React, {
  useState,
  useMemo,
  useEffect,
} from 'react'
import clipboardCopy from 'clipboard-copy'

import style from './MdViewer.module.scss'

import markdown, {
  MarkdownOptions,
} from '../../libs'

export interface MdViewerProps {
  /** Markdown */
  children?: string
  /** MarkdownOptions */
  options?: MarkdownOptions
}

export default function MdViewer({
  children,
  options,
}: MdViewerProps) {
  const [html, setHtml] = useState<string>()
  const render = useMemo(() => markdown(options), [JSON.stringify(options)])

  const onCopy = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLElement
    const targetIsCode = target.tagName === 'PRE'
    const targetIsDoc = target.className === style.copy
    if (targetIsCode || targetIsDoc) {
      clipboardCopy(targetIsDoc ? children as string : target.innerText)
      const { classList } = targetIsDoc ? target.parentElement! : target
      classList.add(style.copied)
      setTimeout(() => {
        classList.remove(style.copied)
      }, 200)
    }
  }

  useEffect(() => {
    if (children) {
      render(children)
        .then((newHtml: string) => render.mermaid(children, newHtml))
        .then(setHtml)
    }
  }, [children])

  return html ? (
    <div
      className={style.md}
    >
      <div
        aria-hidden="true"
        role="button"
        className={style.copy}
        onClick={onCopy}
      />
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        onClick={onCopy}
      />
    </div>
  ) : null
}
