import React from 'react'
import styled from 'styled-components'

const StyledTrademarkO = styled.i``

export const TrademarkO = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTrademarkO {...props} ref={ref} />
    </>
  )
})
