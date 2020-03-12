import React from 'react'
import styled from 'styled-components'

const StyledEnter = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 18px;
    border: 2px solid;
    border-left: 0;
    box-shadow: -8px -6px 0 -6px, -8px 6px 0 -6px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    right: 4px;
  }
  &::before {
    background: currentColor;
    width: 16px;
    height: 2px;
    top: 6px;
  }
  &::after {
    width: 6px;
    height: 6px;
    border-right: 2px solid;
    border-top: 2px solid;
    top: 4px;
    transform: rotate(45deg);
  }
`

export const Enter = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledEnter {...props} ref={ref} />
    </>
  )
})
