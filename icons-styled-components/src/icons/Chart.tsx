import React from 'react'
import styled from 'styled-components'

const StyledChart = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 10px;
    height: 10px;
    border-bottom: 2px solid;
    border-left: 2px solid;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    border: 2px solid;
    box-sizing: border-box;
  }
  &::before {
    border-top-right-radius: 100px;
    right: -2px;
    top: -2px;
    width: 8px;
    height: 8px;
  }
  &::after {
    width: 18px;
    height: 18px;
    border-radius: 100px;
    border-right-color: transparent;
    left: -10px;
    transform: rotate(-45deg);
  }
`

export const Chart = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledChart {...props} ref={ref} />
    </>
  )
})
