import React from 'react'
import styled from 'styled-components'

const StyledLaptop = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 12px;
    border: 2px solid;
    border-radius: 2px;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 22px;
    height: 2px;
    background: currentColor;
    left: -4px;
    bottom: -5px;
    border-radius: 100px;
  }
`

export const Laptop = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledLaptop {...props} ref={ref} />
    </>
  )
})
