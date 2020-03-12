import React from 'react'
import styled from 'styled-components'

const StyledArrowsBreakeH = styled.i``

export const ArrowsBreakeH = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsBreakeH {...props} ref={ref} />
    </>
  )
})
