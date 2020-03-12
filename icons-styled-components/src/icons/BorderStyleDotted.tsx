import React from 'react'
import styled from 'styled-components'

const StyledBorderStyleDotted = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 26px;
    height: 17px;
  }
  &::before {
    content: '';
    position: absolute;
    height: 2px;
    top: 7px;
    border-top: 2px dotted;
  }
`

export const BorderStyleDotted = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBorderStyleDotted {...props} ref={ref} />
    </>
  )
})
