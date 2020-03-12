import React from 'react'
import styled from 'styled-components'

const StyledPinTop = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 2px;
    height: 8px;
    background: currentColor;
    margin-top: -8px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::after {
    background: currentColor;
    top: -2px;
    border-radius: 3px;
    width: 10px;
    height: 2px;
    left: -4px;
  }
  &::before {
    width: 8px;
    height: 8px;
    border: 6px double;
    border-radius: 100px;
    bottom: -10px;
    left: -5px;
  }
`

export const PinTop = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPinTop {...props} ref={ref} />
    </>
  )
})
