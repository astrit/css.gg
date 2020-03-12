import React from 'react'
import styled from 'styled-components'

const StyledDotWindmill = styled.i``

export const DotWindmill = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDotWindmill {...props} ref={ref} />
    </>
  )
})
