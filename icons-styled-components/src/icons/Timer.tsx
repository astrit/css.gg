import React from 'react'
import styled from 'styled-components'

const StyledTimer = styled.i`
  &,
  &::before {
    border: 2px solid;
    width: 18px;
    height: 18px;
    border-radius: 40px;
  }
  & {
    background: linear-gradient(to left, currentColor 10px, transparent 0) no-repeat 6px -2px/2px 6px;
    box-sizing: border-box;
    transform: scale(var(--ggs, 1));
    position: relative;
    display: block;
    border-top-color: transparent;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    border-right-color: transparent;
    border-left-color: transparent;
    border-bottom-color: transparent;
    right: -2px;
    top: -2px;
    transform: rotate(45deg);
  }
  &::after {
    width: 2px;
    height: 6px;
    background: currentColor;
    transform: rotate(-50deg);
    left: 4px;
    bottom: 5px;
    border-radius: 100px;
  }
`

export const Timer = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTimer {...props} ref={ref} />
    </>
  )
})
