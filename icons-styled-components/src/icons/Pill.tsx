import React from 'react'
import styled from 'styled-components'

const StyledPill = styled.i`
  &,
  &::after {
    display: block;
    box-sizing: border-box;
    width: 12px;
  }
  & {
    border-top-left-radius: 140px;
    border-top-right-radius: 140px;
    border: 2px solid;
    transform: rotate(45deg) scale(var(--ggs, 1));
    position: relative;
    height: 14px;
  }
  &::after {
    content: '';
    position: absolute;
    height: 12px;
    background: currentColor;
    left: -2px;
    bottom: -12px;
    border-bottom-left-radius: 140px;
    border-bottom-right-radius: 140px;
  }
`

export const Pill = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPill {...props} ref={ref} />
    </>
  )
})
