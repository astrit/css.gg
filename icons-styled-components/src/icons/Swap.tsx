import React from 'react'
import styled from 'styled-components'

const StyledSwap = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    box-shadow: -2px 2px 0, 2px -2px 0;
    width: 6px;
    height: 2px;
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
    border-left: 3px solid;
    top: -4px;
    right: -4px;
  }
  &::after {
    border-right: 3px solid;
    bottom: -4px;
    left: -4px;
  }
`

export const Swap = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSwap {...props} ref={ref} />
    </>
  )
})
