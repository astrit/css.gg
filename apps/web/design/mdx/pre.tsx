import React, { useEffect, useRef, useState } from "react"
import { Copy } from "m/copy"

interface PreProps {
  children?: any
  raw?: any
  [key: string]: any
}

const PreElement = ({
  children,
  raw,
  handleClose,
  handleMinimize,
  handleMaximize,
  ...props
}: PreProps) => {
  const lang = props["data-language"] || "shell"
  const title = props["data-rehype-pretty-code-title"]
  const classes = props.className

  return (
    <pre {...props} className={classes}>
      <div className={"code-header"}>
        <div className="fake-controls">
          <button className="fake-close" onClick={handleClose} />
          <button className="fake-minimize" onClick={handleMinimize} />
          <button className="fake-maximize" onClick={handleMaximize} />
        </div>
        <div className="fake-path">
          <span className="fake-tab">{lang}</span>
          {title && <span className="fake-title">{title}</span>}
        </div>
        <Copy text={children.props.raw} />
      </div>
      {children}
    </pre>
  )
}

export function Pre({ children, raw, ...props }: PreProps) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)

  const dialogRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (isMaximized && dialogRef.current) {
      ;(dialogRef.current as HTMLDialogElement).showModal()
    }
    if (!isMaximized && dialogRef.current && dialogRef.current.open) {
      ;(dialogRef.current as HTMLDialogElement).close()
    }
  }, [isMaximized])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        handleClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleMinimize = () => {
    setIsMinimized(!isMinimized)
    setIsMaximized(false)
  }

  const handleMaximize = () => {
    setIsMaximized(!isMaximized)
    setIsMinimized(false)
  }

  const handleClose = () => {
    setIsMaximized(false)
  }

  const classes = [
    isMinimized && "fake-minimize-on",
    isMaximized && "fake-maximize-on",
  ].filter(Boolean)

  const rawHtml = `
  <style>
    body {
      background-color: transparent;
    }
  </style>
  ${children.props.raw}
`

  return (
    <>
      <PreElement
        {...props}
        className={classes.join(" ")}
        handleMinimize={handleMinimize}
        handleMaximize={handleMaximize}
        handleClose={handleClose}
      >
        {children}
      </PreElement>
      {1 > 2 && <iframe srcDoc={rawHtml} seamless allowTransparency></iframe>}
      <dialog ref={dialogRef} className="code-dialog">
        <PreElement
          {...props}
          className={classes.join(" ")}
          handleMinimize={handleMinimize}
          handleMaximize={handleMaximize}
          handleClose={handleClose}
        >
          {children}
        </PreElement>
      </dialog>
    </>
  )
}
