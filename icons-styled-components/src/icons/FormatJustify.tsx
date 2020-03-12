import React from 'react'
import styled from 'styled-components'

const StyledFormatJustify = styled.i`
  &,
  &::before {
    display: block;
    box-sizing: border-box;
    width: 16px;
    height: 2px;
    border-radius: 3px;
    background: currentColor;
    box-shadow: 0 8px 0;
  }
  & {
    margin-top: -11px;
    transform: scale(var(--ggs, 1));
    position: relative;
  }
  &::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 0;
  }
`

export const FormatJustify = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFormatJustify {...props} ref={ref} />
    </>
  )
})
