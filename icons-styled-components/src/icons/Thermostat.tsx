import React from 'react'
import styled from 'styled-components'

const StyledThermostat = styled.i`
  & {
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 10px;
    height: 10px;
    border: 2px solid;
    box-sizing: border-box;
    border-radius: 100px;
    border-top-color: transparent;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    border: 2px solid;
    border-bottom: 0;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    width: 6px;
    height: 14px;
    bottom: 5px;
  }
  &::after {
    width: 2px;
    height: 2px;
    border-radius: 100px;
    background: currentColor;
    left: 2px;
    bottom: 2px;
  }
`

export const Thermostat = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledThermostat {...props} ref={ref} />
    </>
  )
})
