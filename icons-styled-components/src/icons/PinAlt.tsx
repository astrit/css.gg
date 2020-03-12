import React from 'react'
import styled from 'styled-components'

const StyledPinAlt = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 2px;
    height: 8px;
    border-radius: 3px;
    transform: scale(var(--ggs, 1));
    background: currentColor;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 12px;
    height: 12px;
    border: 6px double;
    border-radius: 100px;
    top: -10px;
    left: -5px;
  }
`

export const PinAlt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPinAlt {...props} ref={ref} />
    </>
  )
})
