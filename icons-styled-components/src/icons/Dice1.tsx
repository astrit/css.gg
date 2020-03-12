import React from 'react'
import styled from 'styled-components'

const StyledDice1 = styled.i``

export const Dice1 = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDice1 {...props} ref={ref} />
    </>
  )
})
