import React from 'react'
import styled from 'styled-components'

const StyledRowFirst = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 10px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    height: 2px;
    background: currentColor;
  }
  &::before {
    width: 10px;
    top: 4px;
    opacity: 0.5;
    box-shadow: 0 4px 0;
  }
  &::after {
    width: 14px;
  }
`

export const RowFirst = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledRowFirst {...props} ref={ref} />
    </>
  )
})
