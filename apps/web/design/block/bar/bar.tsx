"use client"

// https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
import { usePathname, useRouter } from "next/navigation"
import Link from "@/link/link"

import "@/bar/bar.css"
import Icon from "@/icon/icon"

export default function Bar() {
  const activePath = usePathname()
  const goTo = useRouter()


  const getLinkClass = (href: string) => {
    return activePath === href ? "active" : ""
  }


  const className = [
    "back",
    getLinkClass("/")
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <nav className="bar">
      <Link
        href="/"
        className={className}
      >
        <Icon name="next" />
      </Link>
      <Link
        href="/"
        className={className}
      >
        <Icon name="slant" />
      </Link>
      <Link
        href="/"
        className={className}
      >
        <Icon name="vercel" />
      </Link>
    </nav>
  )
}
