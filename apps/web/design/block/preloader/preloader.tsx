"use client"

import { useContext, useEffect, useRef } from "react"
import { Controller } from "$/provider"

import "@/preloader/preloader.css"

export default function Preloader() {
  const { loading } = useContext(Controller)
  const preloaderRef = useRef(null)

  const circumference = 2 * Math.PI * 10
  const strokeDasharray = 64
  // const strokeDasharray = circumference
  const strokeDashoffset = loading ? circumference : 0

  useEffect(() => {
    if (!loading && preloaderRef.current) {
      ;(preloaderRef.current as HTMLDivElement).style.opacity = "0"
    }
  }, [loading])

  return (
    <div className="preloader" ref={preloaderRef}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="spinner"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeWidth={2}
          strokeLinecap="round"
          className={loading ? "loading" : ""}
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeDasharray="-1000"
          strokeDashoffset="-1000"
          strokeWidth={2}
          strokeLinecap="round"
          opacity={0.1}
        />
      </svg>
    </div>
  )
}
