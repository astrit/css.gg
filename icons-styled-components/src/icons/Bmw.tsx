import React from 'react'
import styled from 'styled-components'

const StyledBmw = styled.i`
  & {
    position: relative;
    box-sizing: border-box;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border: 2px solid;
    border-radius: 18px;
  }
  &::before {
    content: '';
    position: absolute;
    box-sizing: border-box;
    display: block;
    border: 9px solid;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-radius: 18px;
    transform: rotate(45deg);
    left: -2px;
    top: -2px;
  }
`

export const Bmw = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBmw {...props} ref={ref} />
    </>
  )
})
