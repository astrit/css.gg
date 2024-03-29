"use client"

import { usePathname } from "next/navigation"
import Icon from "@/icon/icon"
import Link from "@/link/link"

import "@/bar/bar.css"

export default function Bar() {
  const activePath = usePathname()

  const getLinkClass = (href: string) => {
    return activePath === href ? "active" : ""
  }

  const className = ["back", getLinkClass("/")].filter(Boolean).join(" ")

  return (
    <nav className="bar">
      <Link href="/" className={className}>
        <Icon name="slant" />
      </Link>
      <Link href="/" className={className}>
        <Icon name="next" />
      </Link>
      <Link href="/" className={className}>
        <Icon name="turbo" />
      </Link>
      <Link href="/" className={className}>
        <Icon name="vercel" />
      </Link>
    </nav>
  )
}
