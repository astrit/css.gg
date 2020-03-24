import React from 'react'
import styled from 'styled-components'

const StyledAppleWatch = styled.i`
  & {
    background: linear-gradient(to left, currentColor 5px, transparent 0) no-repeat 13px 4px/2px 4px;
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    border: 5px solid transparent;
    transform: scale(var(--ggs, 1));
    border-radius: 9px;
    box-shadow: inset 0 0 0 2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 10px;
    height: 5px;
    border: 2px solid;
    border-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    left: 2px;
  }
  &::after {
    top: -3px;
  }
  &::before {
    transform: scaleY(-1);
    top: 12px;
  }
`

export const AppleWatch = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledAppleWatch {...props} ref={ref} />
    </>
  )
})