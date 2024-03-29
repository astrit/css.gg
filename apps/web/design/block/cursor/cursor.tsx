"use client"

import { useContext, useEffect, useRef, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import {
  addClass,
  addEventListener,
  addProps,
  getCursor,
  removeAllProps,
  removeClass,
} from "$/cursor/cursor"

import "@/cursor/cursor.css"

export default function Cursor() {
  const REF_CURSOR = useRef<HTMLDivElement | null>(null)
  const REF_MAGNET = useRef<HTMLDivElement | null>(null)
  const REF_RING = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const CURSOR = REF_CURSOR.current
    const MAGNET = REF_MAGNET.current
    const DOC = document.documentElement
    let ANCHORED = false

    window.addEventListener("mouseout", () => {
      if (CURSOR) {
        removeClass(CURSOR, "on")
      } else {
        addClass(CURSOR, "on")
      }
    })

    const handleLinkHover = (event: MouseEvent) => {
      if (MAGNET) {
        removeAllProps(MAGNET)
      }

      const anchor = (event.target as HTMLElement).closest(
        "header a, footer a, footer button"
      )

      anchor?.classList.add("anchored")

      if (anchor) {
        ANCHORED = true
        const BOX = anchor.getBoundingClientRect()
        addClass(CURSOR, "anchored")

        if (MAGNET) {
          const anchorStyle = window.getComputedStyle(anchor)
          let borderRadius = parseInt(anchorStyle.borderRadius, 10)

          if (borderRadius === 0) {
            borderRadius = 200
          }

          addProps(MAGNET, {
            width: BOX.width + "px",
            height: BOX.height + "px",
            "border-radius": borderRadius + "px",
          })
        }

        if (ANCHORED && BOX && MAGNET) {
          addProps(MAGNET, {
            transform: `translate3d(${BOX.left}px,${BOX.top}px, 0)`,
          })
        }

        anchor.addEventListener("mouseout", () => {
          anchor.classList.remove("anchored")
          if (CURSOR) {
            removeClass(CURSOR, "anchored")
          }
          ANCHORED = false
        })
      }
    }

    if (CURSOR) {
      addEventListener(DOC, "pointerdown", () => {
        addClass(CURSOR, "down")
      })
    }

    if (CURSOR && DOC && MAGNET) {
      window.addEventListener("mousemove", () => {
        if (CURSOR) {
          addClass(CURSOR, "on")
        }
      })
      window.addEventListener("mousemove", getCursor(CURSOR))
    }

    addEventListener(DOC, "pointerup", () => {
      removeClass(CURSOR, "down")
    })

    const handleRouteChange = () => {
      if (CURSOR) {
        removeClass(CURSOR, "anchored")
      }
      ANCHORED = false
      document.removeEventListener("mouseover", handleLinkHover)
      if (MAGNET) {
        removeAllProps(MAGNET)
      }
    }

    const url = `${pathname}?${searchParams}`
    handleRouteChange()

    document.addEventListener("mouseover", handleLinkHover)
    return () => {
      document.removeEventListener("mouseover", handleLinkHover)
    }
  }, [pathname, searchParams])

  return (
    <div className="cursor" ref={REF_CURSOR}>
      <div className="part magnet" ref={REF_MAGNET} />
      <div className="part ring" ref={REF_RING} />
    </div>
  )
}
