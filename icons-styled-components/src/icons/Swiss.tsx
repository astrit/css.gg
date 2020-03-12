import React from 'react'
import styled from 'styled-components'

const StyledSwiss = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border: 4px solid;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 5px;
    height: 5px;
    background: currentColor;
    box-shadow: 0 9px 0;
    top: -2px;
  }
  &::after {
    left: -2px;
  }
  &::before {
    right: -2px;
  }
`

export const Swiss = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSwiss {...props} ref={ref} />
    </>
  )
})
