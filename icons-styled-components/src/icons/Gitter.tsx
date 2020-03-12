import React from 'react'
import styled from 'styled-components'

const StyledGitter = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 18px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    box-shadow: inset 2px 0 0, inset -2px 0 0;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    box-sizing: border-box;
    display: block;
    width: 2px;
    background: currentColor;
  }
  &::before {
    height: 13px;
    top: -3px;
    left: -4px;
  }
  &::after {
    height: 10px;
    left: 8px;
  }
`

export const Gitter = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledGitter {...props} ref={ref} />
    </>
  )
})
