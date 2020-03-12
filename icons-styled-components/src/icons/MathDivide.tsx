import React from 'react'
import styled from 'styled-components'

const StyledMathDivide = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 16px;
    height: 2px;
    background: currentColor;
    border-radius: 20px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    top: -6px;
    left: 6px;
  }
  &::after {
    top: 4px;
  }
`

export const MathDivide = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMathDivide {...props} ref={ref} />
    </>
  )
})
