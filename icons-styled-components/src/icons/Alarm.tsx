import React from 'react'
import styled from 'styled-components'

const StyledAlarm = styled.i`
  & {
    background: linear-gradient(to left, currentColor 5px, transparent 0) no-repeat 4.5px 6px/5px
        2px,
      linear-gradient(to left, currentColor 7px, transparent 0) no-repeat 4.5px 2px/2px 6px;
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    border: 2px solid transparent;
    transform: scale(var(--ggs, 1));
    box-shadow: 0 0 0 2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 2px;
    background: currentColor;
    top: -4px;
  }
  &::before {
    left: -5px;
    transform: rotate(-42deg);
  }
  &::after {
    transform: rotate(42deg);
    right: -5px;
  }
`

export const Alarm = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledAlarm {...props} ref={ref} />
    </>
  )
})
