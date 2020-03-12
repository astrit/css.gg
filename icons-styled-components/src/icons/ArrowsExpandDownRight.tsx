import React from 'react'
import styled from 'styled-components'

const StyledArrowsExpandDownRight = styled.i``

export const ArrowsExpandDownRight = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsExpandDownRight {...props} ref={ref} />
    </>
  )
})
