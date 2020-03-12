import React from 'react'
import styled from 'styled-components'

const StyledRing = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 20px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    border: 2px solid;
    box-sizing: border-box;
  }
  &::before {
    border-top-right-radius: 100px;
    transform: rotate(-45deg);
    width: 8px;
    height: 8px;
    left: 6px;
    top: -1px;
  }
  &::after {
    width: 18px;
    height: 18px;
    border-radius: 100px;
    border-top-color: transparent;
    left: 1px;
    top: 2px;
  }
`

export const Ring = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledRing {...props} ref={ref} />
    </>
  )
})
