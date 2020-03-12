import React from 'react'
import styled from 'styled-components'

const StyledMathPercent = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 2px;
    background: currentColor;
    border-radius: 20px;
    transform: rotate(-45deg);
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 4px;
    height: 4px;
    background: currentColor;
    border-radius: 20px;
    top: -7px;
    left: 6px;
  }
  &::after {
    top: 5px;
  }
`

export const MathPercent = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMathPercent {...props} ref={ref} />
    </>
  )
})
