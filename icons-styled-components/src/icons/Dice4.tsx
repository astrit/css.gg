import React from 'react'
import styled from 'styled-components'

const StyledDice4 = styled.i``

export const Dice4 = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDice4 {...props} ref={ref} />
    </>
  )
})
