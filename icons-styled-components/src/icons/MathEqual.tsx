import React from 'react'
import styled from 'styled-components'

const StyledMathEqual = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 2px;
    background: currentColor;
    border-radius: 10px;
    margin-top: -6px;
    box-shadow: 0 6px 0;
  }
`

export const MathEqual = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMathEqual {...props} ref={ref} />
    </>
  )
})
