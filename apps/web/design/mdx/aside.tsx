import React from "react"

export const Aside = ({
  children,
  position = "left",
  styled = false,
  title,
}: {
  children: React.ReactNode
  position?: "left" | "right"
  styled?: boolean
  title?: string
}) => {
  return (
    <div>
      <div>
        {title ? <div>{title}</div> : null}
        <div>{children}</div>
      </div>
    </div>
  )
}
