import React from 'react'
import styled from 'styled-components'

const StyledExtensionAlt = styled.i``

export const ExtensionAlt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledExtensionAlt {...props} ref={ref} />
    </>
  )
})
