import React from 'react'
import styled from 'styled-components'

const StyledMenuRight = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 20px;
    height: 2px;
    border-radius: 3px;
    background: currentColor;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    top: -6px;
    right: 0;
    width: 10px;
  }
  &::after {
    top: 6px;
    width: 14px;
  }
`

export const MenuRight = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMenuRight {...props} ref={ref} />
    </>
  )
})
