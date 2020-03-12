import React from 'react'
import styled from 'styled-components'

const StyledCalendarToday = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border: 2px solid;
    border-top: 4px solid;
    border-radius: 3px;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    background: currentColor;
    height: 4px;
    width: 4px;
    border-radius: 2px;
    right: 2px;
    bottom: 2px;
  }
`

export const CalendarToday = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCalendarToday {...props} ref={ref} />
    </>
  )
})
