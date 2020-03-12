import React from 'react'
import styled from 'styled-components'

const StyledTally = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: skew(-10deg) scale(var(--ggs, 1));
    width: 18px;
    height: 20px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    box-sizing: border-box;
    display: block;
    width: 3px;
    background: currentColor;
    border-radius: 0.5px;
  }
  &::before {
    height: 20px;
    box-shadow: 5px 0 0;
    left: 5px;
  }
  &::after {
    height: 8px;
    box-shadow: 15px 0 0;
  }
`

export const Tally = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTally {...props} ref={ref} />
    </>
  )
})
