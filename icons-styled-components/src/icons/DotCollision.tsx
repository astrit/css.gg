import React from 'react'
import styled from 'styled-components'

const StyledDotCollision = styled.i``

export const DotCollision = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDotCollision {...props} ref={ref} />
    </>
  )
})
