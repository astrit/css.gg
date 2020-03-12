import React from 'react'
import styled from 'styled-components'

const StyledComedyCentral = styled.i`
  &,
  &::before {
    box-sizing: border-box;
    display: block;
    border: 3px solid;
    border-radius: 100px;
  }
  & {
    position: relative;
    border-left-color: transparent;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 20px;
  }
  &::before {
    content: '';
    position: absolute;
    border-right-color: transparent;
    width: 10px;
    height: 10px;
    bottom: 2px;
    right: 2px;
  }
`

export const ComedyCentral = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledComedyCentral {...props} ref={ref} />
    </>
  )
})
