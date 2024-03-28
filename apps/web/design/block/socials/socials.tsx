"use client"

import React, { Suspense, useContext, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Copy from "@/copy/copy"
import Icon from "@/icon/icon"
import Link from "@/link/link"
import Stack from "@/stack/stack"
import { Controller } from "$/provider"

import "@/socials/socials.css"

interface Social {
  social: string
  link: string
  handle: string
  stats: string
}

export default function Socials() {
  const { loading, data } = useContext(Controller)
  const [copied, setCopied] = useState(false)

  const emailUser = "me"
  const emailDomain = "lona.is"
  const email = `${emailUser}@${emailDomain}`

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!data || !data.pages) {
    return
  }

  const pageData = data.pages.find((page) => page?.path === "/contact")

  if (!pageData || !pageData.socials) {
    return <p>No socials found</p>
  }

  const links = pageData.socials

  return (
    !loading && (
      <div className="socials">
        <div className="left">
          <div className="authors">
            <figure>
              <Image
                src="/lona.png"
                width="48"
                height="48"
                title="Lona"
                alt="Lona"
              />
              <Image
                src="/astrit.png"
                width="48"
                height="48"
                title="Astrit"
                alt="Astrit"
              />
            </figure>
            <footer>
              <span data-author="Design">{`Lona`}</span>
              <span className="separator">{`×`}</span>
              <span data-author="Code">{`Astrit`}</span>
            </footer>
          </div>
          <Stack />
          <Copy />
        </div>
        <div className="right">
          <div className="talk">
            <span>{`Let's Talk`}</span>
            <div className="email">
              {copied ? <span>Copied!</span> : <p>{email}</p>}
              <button onClick={copyEmail}>
                COPY <Icon name="copy" />
              </button>
            </div>
          </div>
          {links.map(
            ({ link, social, handle, stats }: Social, index: number) => (
              <Link key={index} href={link} className="social" target="_blank">
                <span className="part title">{social}</span>
                <span className="part handle">{handle}</span>
                <span className="part stats">{stats}</span>
              </Link>
            )
          )}
        </div>
      </div>
    )
  )
}
