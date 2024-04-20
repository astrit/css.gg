/* eslint-disable react/display-name */
import React from "react"
import NextLink from "next/link"

import "./link.css"

type LinkProps = {
  href: string
  children?: React.ReactNode
  className?: string
  onContextMenu?: any
  target?: string
  style?: React.CSSProperties
  any?: any
  onMouseEnter?: any
  onMouseLeave?: any
  download?: boolean
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, href, className, target, ...rest }, ref) => {
    const classes = ["link"]
    // classes.push("")
    // if (right) classes.push("box-right")
    // if (left) classes.push("box-left")
    if (className) {
      classes.push(className)
    }
    return (
      <NextLink
        ref={ref}
        href={href as string}
        className={classes.join(" ")}
        passHref
        target={target}
        {...rest}
      >
        {children}
      </NextLink>
    )
  }
)

export default Link
