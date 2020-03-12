import React from 'react'
import styled from 'styled-components'

const StyledDotFalling = styled.i``

export const DotFalling = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDotFalling {...props} ref={ref} />
    </>
  )
})
