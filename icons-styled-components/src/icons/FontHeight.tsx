import React from 'react'
import styled from 'styled-components'

const StyledFontHeight = styled.i``

export const FontHeight = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFontHeight {...props} ref={ref} />
    </>
  )
})
