import React from 'react'
import styled from 'styled-components'

const StyledDotPulse = styled.i``

export const DotPulse = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDotPulse {...props} ref={ref} />
    </>
  )
})
