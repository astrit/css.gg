import React from 'react'
import styled from 'styled-components'

const StyledFormatItalic = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: skewX(-20deg) scale(var(--ggs, 1));
    width: 6px;
    height: 12px;
    border-top: 2px solid;
    border-bottom: 2px solid;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 10px;
    width: 2px;
    background: currentColor;
    left: 2px;
    top: -2px;
  }
`

export const FormatItalic = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFormatItalic {...props} ref={ref} />
    </>
  )
})
