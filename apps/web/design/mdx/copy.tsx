"use client"

import { MouseEvent, useState } from "react"
import Icon from "@/icon/icon"

interface CopyProps {
  text: string | undefined
}

export const Copy = ({ text }: CopyProps) => {
  const [isCopied, setIsCopied] = useState(false)

  const copy = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    await navigator.clipboard.writeText(text as string)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 640)
  }

  return (
    <button className="code-copy" disabled={isCopied} onClick={copy}>
      {isCopied ? <Icon name="check" /> : <Icon name="copy" />}
    </button>
  )
}
