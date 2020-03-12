import React from 'react'
import styled from 'styled-components'

const StyledArrowsBreakeV = styled.i``

export const ArrowsBreakeV = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsBreakeV {...props} ref={ref} />
    </>
  )
})
