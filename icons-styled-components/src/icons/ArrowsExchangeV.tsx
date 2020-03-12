import React from 'react'
import styled from 'styled-components'

const StyledArrowsExchangeV = styled.i``

export const ArrowsExchangeV = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsExchangeV {...props} ref={ref} />
    </>
  )
})
