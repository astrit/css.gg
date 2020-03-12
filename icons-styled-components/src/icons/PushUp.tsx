import React from 'react'
import styled from 'styled-components'

const StyledPushUp = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 2px;
    height: 16px;
    background: currentColor;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 12px;
    height: 2px;
    border-top: 2px solid;
    top: -5px;
    left: -5px;
  }
  &::after {
    width: 8px;
    height: 8px;
    border-left: 2px solid;
    transform: rotate(45deg);
    left: -3px;
    top: 0;
  }
`

export const PushUp = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPushUp {...props} ref={ref} />
    </>
  )
})
