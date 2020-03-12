import React from 'react'
import styled from 'styled-components'

const StyledFormatUppercase = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 8px;
    height: 8px;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    box-shadow: 0 -2px 0 0, inset 0 0 0 2px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 4px;
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
    bottom: 0;
    right: -8px;
  }
`

export const FormatUppercase = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFormatUppercase {...props} ref={ref} />
    </>
  )
})
