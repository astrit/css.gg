import React from 'react'
import styled from 'styled-components'

const StyledFontSize = styled.i``

export const FontSize = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFontSize {...props} ref={ref} />
    </>
  )
})
