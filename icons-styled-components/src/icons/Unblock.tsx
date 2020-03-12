import React from 'react'
import styled from 'styled-components'

const StyledUnblock = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: rotate(45deg) scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border: 2px solid;
    border-radius: 100%;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 2px;
    height: 7px;
    background: currentColor;
    border-radius: 5px;
    left: 6px;
  }
  &::before {
    top: -2px;
  }
  &::after {
    bottom: -2px;
  }
`

export const Unblock = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledUnblock {...props} ref={ref} />
    </>
  )
})
