import React from 'react'
import styled from 'styled-components'

const StyledFormatLineHeight = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 10px;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    border-left: 4px solid transparent;
    box-shadow: -2px 0 0 0, 2px -4px 0 -2px, 2px 4px 0 -2px, inset 0 2px 0 0, inset 0 -2px 0 0;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 0;
    height: 0;
    border-right: 3px solid transparent;
    border-left: 3px solid transparent;
    left: -8px;
  }
  &::before {
    border-top: 4px solid;
    bottom: -5px;
  }
  &::after {
    border-bottom: 4px solid;
    top: -5px;
  }
`

export const FormatLineHeight = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFormatLineHeight {...props} ref={ref} />
    </>
  )
})
