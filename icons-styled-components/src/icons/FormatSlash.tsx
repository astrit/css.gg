import React from 'react'
import styled from 'styled-components'

const StyledFormatSlash = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: rotate(25deg) scale(var(--ggs, 1));
    width: 2px;
    height: 14px;
    background: currentColor;
    border-radius: 3px;
  }
`

export const FormatSlash = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFormatSlash {...props} ref={ref} />
    </>
  )
})
