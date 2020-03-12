import React from 'react'
import styled from 'styled-components'

const StyledCalendarDates = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border: 2px solid;
    border-radius: 3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    height: 2px;
    left: 2px;
  }
  &::before {
    background: currentColor;
    width: 2px;
    box-shadow: 4px 0 0, 8px 0 0, 0 4px 0, 4px 4px 0, 8px 4px 0;
    top: 6px;
  }
  &::after {
    width: 10px;
    top: -4px;
    box-shadow: 0 6px 0 0;
  }
`

export const CalendarDates = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCalendarDates {...props} ref={ref} />
    </>
  )
})
