import React from 'react'
import styled from 'styled-components'

const StyledShoppingCart = styled.i``

export const ShoppingCart = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledShoppingCart {...props} ref={ref} />
    </>
  )
})
