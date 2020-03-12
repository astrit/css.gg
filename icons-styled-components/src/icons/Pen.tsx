import React from 'react'
import styled from 'styled-components'

const StyledPen = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: rotate(-45deg) scale(var(--ggs, 1));
    width: 14px;
    height: 4px;
    border-right: 2px solid transparent;
    box-shadow: 0 0 0 2px, inset -2px 0 0;
    border-top-right-radius: 1px;
    border-bottom-right-radius: 1px;
    margin-right: -2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    background: currentColor;
    border-left: 0;
    right: -6px;
    width: 3px;
    height: 4px;
    border-radius: 1px;
    top: 0;
  }
  &::after {
    width: 8px;
    height: 7px;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 7px solid;
    left: -11px;
    top: -2px;
  }
`

export const Pen = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPen {...props} ref={ref} />
    </>
  )
})
