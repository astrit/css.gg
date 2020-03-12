import React from 'react'
import styled from 'styled-components'

const StyledDotSpin = styled.i``

export const DotSpin = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDotSpin {...props} ref={ref} />
    </>
  )
})
