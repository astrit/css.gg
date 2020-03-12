import React from 'react'
import styled from 'styled-components'

const StyledArrowsExpandUpRight = styled.i``

export const ArrowsExpandUpRight = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsExpandUpRight {...props} ref={ref} />
    </>
  )
})
