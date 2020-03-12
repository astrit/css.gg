import React from 'react'
import styled from 'styled-components'

const StyledShapeHalfCircle = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 8px;
    height: 16px;
    border: 3px solid;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    border-right: 0;
  }
`

export const ShapeHalfCircle = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledShapeHalfCircle {...props} ref={ref} />
    </>
  )
})
