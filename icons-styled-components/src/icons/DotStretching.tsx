import React from 'react'
import styled from 'styled-components'

const StyledDotStretching = styled.i``

export const DotStretching = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDotStretching {...props} ref={ref} />
    </>
  )
})
