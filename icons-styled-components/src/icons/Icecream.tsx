import React from 'react'
import styled from 'styled-components'

const StyledIcecream = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 16px;
    border: 2px solid;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    margin-top: -8px;
    border-bottom: 0;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    border-left: 4px solid;
    border-right: 4px solid;
    width: 12px;
    height: 2px;
    bottom: 0;
    left: -2px;
  }
  &::after {
    width: 6px;
    height: 8px;
    border: 2px solid;
    bottom: -6px;
    left: 2px;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    border-top: 0;
  }
`

export const Icecream = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledIcecream {...props} ref={ref} />
    </>
  )
})
