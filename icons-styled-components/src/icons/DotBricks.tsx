import React from 'react'
import styled from 'styled-components'

const StyledDotBricks = styled.i``

export const DotBricks = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDotBricks {...props} ref={ref} />
    </>
  )
})
