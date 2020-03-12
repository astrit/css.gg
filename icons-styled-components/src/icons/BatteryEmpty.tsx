import React from 'react'
import styled from 'styled-components'

const StyledBatteryEmpty = styled.i`
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
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 4px;
    height: 6px;
    right: -4px;
    top: 1px;
    background: currentColor;
  }
`

export const BatteryEmpty = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBatteryEmpty {...props} ref={ref} />
    </>
  )
})
