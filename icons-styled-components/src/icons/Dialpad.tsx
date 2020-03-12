import React from 'react'
import styled from 'styled-components'

const StyledDialpad = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::before {
    box-shadow: -5px 0 0, 5px 0 0;
  }
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 3px;
    height: 3px;
    background: currentColor;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    left: 0;
  }
  &::before {
    bottom: 5px;
  }
  &::after {
    box-shadow: -5px 0 0, 5px 0 0, 0 5px 0;
    top: 5px;
  }
`

export const Dialpad = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDialpad {...props} ref={ref} />
    </>
  )
})
