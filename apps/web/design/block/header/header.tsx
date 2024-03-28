"use client"

import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import Nav from "@/nav/nav"
import Status from "@/status/status"
import Link from "@/link/link"

import "@/header/header.css"

function Left({ children }: { children: ReactNode }) {
  return <div className="sides left">{children}</div>
}

function Right({ children }: { children: ReactNode }) {
  return <div className="sides right">{children}</div>
}

export default function Header() {
  const path = usePathname()

  return (
    <header className="main-header">
      <Left>
        <Nav />
      </Left>
      <small></small>
      <Right>
        {path !== "/about" && (
          <Link href="/about">
            <Status status="available" />
          </Link>
        )}
      </Right>
    </header>
  )
}
