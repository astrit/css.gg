import React from 'react'
import styled from 'styled-components'

const StyledDotFlashing = styled.i``

export const DotFlashing = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDotFlashing {...props} ref={ref} />
    </>
  )
})
