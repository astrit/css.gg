import React from 'react'
import styled from 'styled-components'

const StyledDotRevolution = styled.i``

export const DotRevolution = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDotRevolution {...props} ref={ref} />
    </>
  )
})
