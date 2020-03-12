import React from 'react'
import styled from 'styled-components'

const StyledCalendar = styled.i`
  &,
  &::before {
    display: block;
    box-sizing: border-box;
  }
  & {
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border: 2px solid;
    border-top: 4px solid;
    border-radius: 3px;
  }
  &::before {
    content: '';
    position: absolute;
    width: 10px;
    border-radius: 3px;
    left: 2px;
    background: currentColor;
    height: 2px;
    top: 2px;
  }
`

export const Calendar = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCalendar {...props} ref={ref} />
    </>
  )
})
