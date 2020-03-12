import React from 'react'
import styled from 'styled-components'

const StyledDrink = styled.i``

export const Drink = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDrink {...props} ref={ref} />
    </>
  )
})
