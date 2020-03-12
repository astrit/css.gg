import React from 'react'
import styled from 'styled-components'

const StyledPushLeft = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 2px;
    background: currentColor;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 2px;
    height: 12px;
    border-left: 2px solid;
    left: -5px;
    top: -5px;
  }
  &::after {
    width: 8px;
    height: 8px;
    border-bottom: 2px solid;
    transform: rotate(45deg);
    top: -3px;
    left: 0;
  }
`

export const PushLeft = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPushLeft {...props} ref={ref} />
    </>
  )
})
