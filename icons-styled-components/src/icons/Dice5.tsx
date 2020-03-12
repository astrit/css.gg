import React from 'react'
import styled from 'styled-components'

const StyledDice5 = styled.i``

export const Dice5 = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDice5 {...props} ref={ref} />
    </>
  )
})
