import React from 'react'
import styled from 'styled-components'

const StyledSmartphoneShake = styled.i`
  & {
    background: linear-gradient(to left, currentColor 5px, transparent 0) no-repeat 4px 12px/2px 2px;
    box-sizing: border-box;
    position: relative;
    transform: scale(var(--ggs, 1));
    display: block;
    width: 14px;
    height: 20px;
    border: 2px solid;
    border-radius: 2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 10px;
    width: 6px;
    border: 2px solid transparent;
    overflow: hidden;
    box-shadow: 2px 0 0, inset -2px 0 0;
    top: 3px;
    left: -12px;
  }
  &::after {
    transform: scaleX(-1);
    left: 16px;
  }
`

export const SmartphoneShake = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSmartphoneShake {...props} ref={ref} />
    </>
  )
})
