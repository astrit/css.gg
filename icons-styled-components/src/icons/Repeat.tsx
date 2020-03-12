import React from 'react'
import styled from 'styled-components'

const StyledRepeat = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    box-shadow: -2px -2px 0 0, 2px 2px 0 0;
    width: 14px;
    height: 6px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 0;
    height: 0;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
  }
  &::before {
    border-left: 5px solid;
    top: -4px;
    right: 0;
  }
  &::after {
    border-right: 5px solid;
    bottom: -4px;
    left: 0;
  }
`

export const Repeat = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledRepeat {...props} ref={ref} />
    </>
  )
})
