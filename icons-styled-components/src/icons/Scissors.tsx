import React from 'react'
import styled from 'styled-components'

const StyledScissors = styled.i``

export const Scissors = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledScissors {...props} ref={ref} />
    </>
  )
})
