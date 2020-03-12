import React from 'react'
import styled from 'styled-components'

const StyledLogIn = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 6px;
    height: 16px;
    border: 2px solid;
    border-left: 0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    margin-right: -10px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::after {
    border-top: 2px solid;
    border-right: 2px solid;
    transform: rotate(45deg);
    width: 8px;
    height: 8px;
    left: -8px;
    bottom: 2px;
  }
  &::before {
    border-radius: 3px;
    width: 10px;
    height: 2px;
    background: currentColor;
    left: -11px;
    bottom: 5px;
  }
`

export const LogIn = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledLogIn {...props} ref={ref} />
    </>
  )
})
