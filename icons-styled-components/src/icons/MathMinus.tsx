import React from 'react'
import styled from 'styled-components'

const StyledMathMinus = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 2px;
    background: currentColor;
    border-radius: 10px;
  }
`

export const MathMinus = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMathMinus {...props} ref={ref} />
    </>
  )
})
