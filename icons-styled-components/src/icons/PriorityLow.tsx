import React from 'react'
import styled from 'styled-components'

const StyledPriorityLow = styled.i``

export const PriorityLow = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPriorityLow {...props} ref={ref} />
    </>
  )
})
