import React from 'react'
import styled from 'styled-components'

const StyledFontSpacing = styled.i``

export const FontSpacing = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFontSpacing {...props} ref={ref} />
    </>
  )
})
