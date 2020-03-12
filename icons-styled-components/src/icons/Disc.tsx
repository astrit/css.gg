import React from 'react'
import styled from 'styled-components'

const StyledDisc = styled.i`
  &,
  &::after,
  &::before {
    display: block;
    box-sizing: border-box;
    border: 2px solid;
    border-radius: 50%;
  }
  & {
    border-top-color: transparent;
    border-bottom-color: transparent;
    transform: rotate(45deg) scale(var(--ggs, 1));
    position: relative;
    width: 14px;
    height: 14px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    top: 2px;
    left: 2px;
  }
  &::after {
    width: 22px;
    height: 22px;
    border-radius: 100%;
    top: -6px;
    left: -6px;
  }
`

export const Disc = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDisc {...props} ref={ref} />
    </>
  )
})
