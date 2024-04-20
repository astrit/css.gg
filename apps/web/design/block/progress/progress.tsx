"use client"

import React, { useEffect, useRef, useState } from "react"

import "@/progress/progress.css"

const Progress = () => {
  const [strokeOffset, setStrokeOffset] = useState(0)
  const [strokeDasharray, setStrokeDasharray] = useState(0)
  const [showSecondCircle, setShowSecondCircle] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isTop, setIsTop] = useState(true)
  const scrollRef = useRef<SVGCircleElement | null>(null)

  useEffect(() => {
    function handleScroll() {
      const prog = scrollRef.current

      if (prog) {
        const leng = prog.getTotalLength()
        const windowHeight = window.innerHeight
        const documentHeight = document.body.scrollHeight
        const scrollPosition = window.pageYOffset
        const progress =
          leng - (scrollPosition * leng) / (documentHeight - windowHeight)

        setStrokeOffset(progress)
        setStrokeDasharray(leng)

        const scrollPercentage =
          (scrollPosition / (documentHeight - windowHeight)) * 100
        setShowSecondCircle(scrollPercentage >= 20)
        setIsTop(scrollPosition === 0)
      }
      setHasScrolled(true)
    }

    if (typeof document !== "undefined" && window.innerWidth > 1024) {
      window.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (typeof document !== "undefined" && window.innerWidth > 1024) {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  function handleScrollToTop() {
    const duration = 500

    const start = window.pageYOffset
    const startTime =
      "now" in window.performance ? performance.now() : new Date().getTime()

    const scrollStep = () => {
      const currentTime =
        "now" in window.performance ? performance.now() : new Date().getTime()
      const elapsedTime = currentTime - startTime
      const newPosition = easeInOutCubic(elapsedTime, start, -start, duration)
      window.scroll(0, newPosition)

      if (elapsedTime < duration) {
        requestAnimationFrame(scrollStep)
      }
    }

    const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
      t /= d / 2
      if (t < 1) return (c / 2) * t * t * t + b
      t -= 2
      return (c / 2) * (t * t * t + 2) + b
    }

    requestAnimationFrame(scrollStep)
  }

  return (
    <button className="progress" onClick={handleScrollToTop}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        {hasScrolled && (
          <circle
            ref={scrollRef}
            cx="12"
            cy="12"
            r="10"
            strokeDasharray={strokeDasharray == 0 ? 1000 : strokeDasharray}
            strokeDashoffset={strokeOffset == 0 ? 1000 : strokeOffset}
            strokeWidth={2}
            strokeLinecap="round"
          />
        )}
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
        <polyline
          points={isTop ? "10 12 14 12" : "15 13 12 10 9 13"}
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={2}
        />
      </svg>
    </button>
  )
}

Progress.displayName = "Progress"

export default Progress
