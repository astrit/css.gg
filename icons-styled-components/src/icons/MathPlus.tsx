import React from 'react'
import styled from 'styled-components'

const StyledMathPlus = styled.i`
  &,
  &::after {
    display: block;
    box-sizing: border-box;
    background: currentColor;
    border-radius: 10px;
  }
  & {
    margin-top: -2px;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 2px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 16px;
    top: -7px;
    left: 7px;
  }
`

export const MathPlus = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMathPlus {...props} ref={ref} />
    </>
  )
})
