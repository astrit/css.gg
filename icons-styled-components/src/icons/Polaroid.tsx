import React from 'react'
import styled from 'styled-components'

const StyledPolaroid = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 20px;
    border: 2px solid;
    border-radius: 2px;
    box-shadow: inset 0 -5px 0;
  }
`

export const Polaroid = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPolaroid {...props} ref={ref} />
    </>
  )
})
