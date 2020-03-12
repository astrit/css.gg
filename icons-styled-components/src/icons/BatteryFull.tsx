import React from 'react'
import styled from 'styled-components'

const StyledBatteryFull = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 20px;
    height: 12px;
    transform: scale(var(--ggs, 1));
    border: 2px solid;
    border-radius: 3px;
    margin-left: -3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 6px;
    background: currentColor;
    top: 1px;
  }
  &::before {
    right: -4px;
    border-radius: 3px;
    width: 4px;
  }
  &::after {
    width: 14px;
    left: 1px;
  }
`

export const BatteryFull = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBatteryFull {...props} ref={ref} />
    </>
  )
})
