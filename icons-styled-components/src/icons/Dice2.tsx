import React from 'react'
import styled from 'styled-components'

const StyledDice2 = styled.i``

export const Dice2 = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDice2 {...props} ref={ref} />
    </>
  )
})
