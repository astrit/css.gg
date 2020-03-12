import React from 'react'
import styled from 'styled-components'

const StyledKeyboard = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 26px;
    height: 14px;
    border: 2px solid;
    border-radius: 2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 2px;
    background: currentColor;
  }
  &::before {
    top: 2px;
    box-shadow: 4px 0 0, 8px 0 0, 12px 0 0, 16px 0 0, 16px 4px 0, 0 4px 0;
    width: 2px;
    left: 2px;
  }
  &::after {
    width: 10px;
    bottom: 2px;
    left: 6px;
  }
`

export const Keyboard = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledKeyboard {...props} ref={ref} />
    </>
  )
})
