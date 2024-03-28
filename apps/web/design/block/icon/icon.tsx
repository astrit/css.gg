import React from "react"
import icons from "~/icons.json"

import "@/icon/icon.css"

interface IconProps {
  name: string
  viewBox?: string
  blur?: boolean
  flip?: boolean
  className?: string
  [rest: string]: any
}

const Icon = ({ name, viewBox, blur, className, flip, ...rest }: IconProps) => {
  const icon = icons.icons.find((icon: { name: string }) => icon.name === name)

  if (!icon) {
    return null
  }

  const classNames = [className, "icon", flip ? "flip" : null, icon.name]
    .filter(Boolean)
    .join(" ")

  const svgElement = (
    <svg
      className={classNames}
      viewBox={viewBox ? viewBox : icon.box}
      dangerouslySetInnerHTML={{ __html: icon.path }}
      {...rest}
    />
  )

  return blur ? (
    <div className="icon-blur">
      {svgElement}
      {svgElement}
    </div>
  ) : (
    svgElement
  )
}

export default Icon
