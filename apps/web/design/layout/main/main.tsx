"use client"

import React, { ReactNode } from "react"

import "&/main/main.css"

interface MainProps {
  children: ReactNode
}

const Main = ({ children, ...rest }: MainProps) => {
  return (
    <main className="layout main" {...rest}>
      {children}
    </main>
  )
}
export default Main
