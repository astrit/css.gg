"use client"

import * as React from "react"
import Link from "@/link/link"
import { Aside } from "m/aside"
import { Code } from "m/code"
import { Pre } from "m/pre"
import { useMDXComponent } from "next-contentlayer/hooks"

const components = {
  Code,
  Aside,
  pre: Pre,
  a: ({ href = "", ...props }) => {
    if (href.startsWith("http")) {
      return <a href={href} target="_blank" rel="noopener" {...props} />
    }
    return <Link href={href} {...props} />
  },
}

export function Mdx({
  code,
  globals,
}: {
  code: string
  globals: Record<string, any>
}) {
  const Component = useMDXComponent(code, globals)
  return <Component components={components} />
}
