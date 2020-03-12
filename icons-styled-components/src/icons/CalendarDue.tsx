import React from 'react'
import styled from 'styled-components'

const StyledCalendarDue = styled.i`
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
    border-radius: 6px;
    background: currentColor;
  }
  &::before {
    top: 2px;
    width: 10px;
    height: 2px;
    left: 2px;
  }
  &::after {
    width: 4px;
    height: 4px;
    bottom: 3px;
    left: 5px;
  }
`

export const CalendarDue = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCalendarDue {...props} ref={ref} />
    </>
  )
})
