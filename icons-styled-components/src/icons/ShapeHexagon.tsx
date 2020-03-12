import React from 'react'
import styled from 'styled-components'

const StyledShapeHexagon = styled.i``

export const ShapeHexagon = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledShapeHexagon {...props} ref={ref} />
    </>
  )
})
