import React from 'react'
import styled from 'styled-components'

const StyledDice3 = styled.i``

export const Dice3 = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDice3 {...props} ref={ref} />
    </>
  )
})
