"use client"

import { usePathname } from "next/navigation"
import Link from "@/link/link"

import "@/nav/nav.css"

import Icon from "@/icon/icon"

const Links = [{ href: "/", label: "CSS＊GG", title: "CSS＊GG" }]

export default function Nav() {
  const current = usePathname()
  return (
    <nav>
      {Links.map(({ href, label, title }) => (
        <Link
          key={href}
          href={href}
          data-title={title}
          className={current === href ? "active" : ""}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
