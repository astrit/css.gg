import React from 'react'
import styled from 'styled-components'

const StyledSquare = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 12px;
    height: 12px;
    border-radius: 1px;
    border: 3px solid transparent;
    box-shadow: 0 0 0 3px, inset 0 0 0 3px;
  }
`

export const Square = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSquare {...props} ref={ref} />
    </>
  )
})
