import React from 'react'
import styled from 'styled-components'

const StyledTrademarkR = styled.i``

export const TrademarkR = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTrademarkR {...props} ref={ref} />
    </>
  )
})
