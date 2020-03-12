import React from 'react'
import styled from 'styled-components'

const StyledFormatStrike = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 10px;
    height: 3px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    box-shadow: 0 -2px 0 0, inset 0 0 0 2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 14px;
    height: 2px;
    background: currentColor;
    left: -6px;
    top: 4px;
  }
  &::after {
    width: 2px;
    height: 4px;
    left: 0;
    top: 7px;
  }
`

export const FormatStrike = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFormatStrike {...props} ref={ref} />
    </>
  )
})
