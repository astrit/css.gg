import React from 'react'
import styled from 'styled-components'

const StyledCalendarNext = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 14px;
    border: 2px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 4px solid transparent;
    border-left: 3px solid transparent;
    box-shadow: 0 0 0 2px, inset 0 -2px 0;
    border-radius: 1px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    background: currentColor;
    border-radius: 2px;
    top: 0;
    left: -1px;
    width: 10px;
    height: 2px;
  }
  &::after {
    width: 0;
    height: 0;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-left: 5px solid;
    bottom: -2px;
    right: -2px;
  }
`

export const CalendarNext = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCalendarNext {...props} ref={ref} />
    </>
  )
})
