import React from 'react'
import styled from 'styled-components'

const StyledDotFloating = styled.i``

export const DotFloating = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDotFloating {...props} ref={ref} />
    </>
  )
})
