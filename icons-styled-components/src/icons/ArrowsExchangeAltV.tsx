import React from 'react'
import styled from 'styled-components'

const StyledArrowsExchangeAltV = styled.i``

export const ArrowsExchangeAltV = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsExchangeAltV {...props} ref={ref} />
    </>
  )
})
