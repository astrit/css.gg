import React from 'react'
import styled from 'styled-components'

const StyledArrowsExchange = styled.i``

export const ArrowsExchange = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsExchange {...props} ref={ref} />
    </>
  )
})
