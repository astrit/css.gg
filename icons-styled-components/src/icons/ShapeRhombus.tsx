import React from 'react'
import styled from 'styled-components'

const StyledShapeRhombus = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: rotate(45deg) scale(var(--ggs, 1));
    width: 14px;
    height: 14px;
    border: 3px solid;
  }
`

export const ShapeRhombus = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledShapeRhombus {...props} ref={ref} />
    </>
  )
})
