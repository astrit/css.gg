import React from 'react'
import styled from 'styled-components'

const StyledArrowsExpandRight = styled.i``

export const ArrowsExpandRight = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsExpandRight {...props} ref={ref} />
    </>
  )
})
