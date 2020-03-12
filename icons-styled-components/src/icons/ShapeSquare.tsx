import React from 'react'
import styled from 'styled-components'

const StyledShapeSquare = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 16px;
    border: 3px solid;
  }
`

export const ShapeSquare = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledShapeSquare {...props} ref={ref} />
    </>
  )
})
