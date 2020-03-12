import React from 'react'
import styled from 'styled-components'

const StyledFormatUnderline = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 12px;
    height: 12px;
    border: 2px solid;
    border-top: 0;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 12px;
    height: 2px;
    background: currentColor;
    left: -2px;
    bottom: -6px;
  }
`

export const FormatUnderline = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFormatUnderline {...props} ref={ref} />
    </>
  )
})
