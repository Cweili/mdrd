import React, {
  useState,
  useEffect,
} from 'react'
import clipboardCopy from 'clipboard-copy'

import style from './MdView.module.scss'

import markdown, {
  MdrdOptions,
} from '../../libs'

export interface MdViewProps {
  /** Markdown */
  children?: string
  copy?: boolean
  /** MdrdOptions */
  options?: MdrdOptions
}

export default function MdView({
  children,
  copy,
  options,
}: MdViewProps) {
  const [html, setHtml] = useState<string>()
  const render = markdown(options)

  const onCopy = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (copy) {
      const target = e.target as HTMLElement
      const targetIsCode = target.tagName === 'PRE'
      const targetIsDoc = target.className === style.copyBtn
      if (targetIsCode || targetIsDoc) {
        clipboardCopy(targetIsDoc ? children as string : target.innerText)
        const { classList } = targetIsDoc ? target.parentElement! : target
        classList.add(style.copied)
        setTimeout(() => {
          classList.remove(style.copied)
        }, 200)
      }
    }
  }

  useEffect(() => {
    render(children!)
      .then((newHtml: string) => render.mermaid(children!, newHtml))
      .then(setHtml)
  }, [children])

  return html ? (
    <div
      className={`${style.md}${copy ? ` ${style.copy}` : ''}`}
    >
      {copy && (
        <div
          aria-hidden='true'
          role='button'
          className={style.copyBtn}
          onClick={onCopy}
        />
      )}
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        onClick={onCopy}
      />
    </div>
  ) : null
}
