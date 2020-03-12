import React from 'react'
import styled from 'styled-components'

const StyledArrowsExchangeAlt = styled.i``

export const ArrowsExchangeAlt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsExchangeAlt {...props} ref={ref} />
    </>
  )
})
