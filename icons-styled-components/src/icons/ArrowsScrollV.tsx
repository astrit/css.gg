import React from 'react'
import styled from 'styled-components'

const StyledArrowsScrollV = styled.i``

export const ArrowsScrollV = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsScrollV {...props} ref={ref} />
    </>
  )
})
