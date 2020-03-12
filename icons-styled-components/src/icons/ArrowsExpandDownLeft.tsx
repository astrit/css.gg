import React from 'react'
import styled from 'styled-components'

const StyledArrowsExpandDownLeft = styled.i``

export const ArrowsExpandDownLeft = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsExpandDownLeft {...props} ref={ref} />
    </>
  )
})
