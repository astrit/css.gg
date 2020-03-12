import React from 'react'
import styled from 'styled-components'

const StyledCardDiamonds = styled.i``

export const CardDiamonds = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCardDiamonds {...props} ref={ref} />
    </>
  )
})
