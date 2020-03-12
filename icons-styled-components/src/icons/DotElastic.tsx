import React from 'react'
import styled from 'styled-components'

const StyledDotElastic = styled.i``

export const DotElastic = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDotElastic {...props} ref={ref} />
    </>
  )
})
