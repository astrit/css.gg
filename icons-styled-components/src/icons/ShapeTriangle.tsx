import React from 'react'
import styled from 'styled-components'

const StyledShapeTriangle = styled.i``

export const ShapeTriangle = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledShapeTriangle {...props} ref={ref} />
    </>
  )
})
