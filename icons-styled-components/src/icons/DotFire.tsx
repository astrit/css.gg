import React from 'react'
import styled from 'styled-components'

const StyledDotFire = styled.i``

export const DotFire = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDotFire {...props} ref={ref} />
    </>
  )
})
