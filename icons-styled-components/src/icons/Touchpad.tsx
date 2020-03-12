import React from 'react'
import styled from 'styled-components'

const StyledTouchpad = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    border: 2px solid;
    border-radius: 3px;
    width: 22px;
    height: 18px;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 2px;
    height: 6px;
    bottom: -2px;
    left: 8px;
    background: currentColor;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 20px;
    height: 2px;
    left: -2px;
    bottom: 3px;
    background: currentColor;
  }
`

export const Touchpad = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTouchpad {...props} ref={ref} />
    </>
  )
})
