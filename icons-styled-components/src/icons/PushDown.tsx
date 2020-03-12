import React from 'react'
import styled from 'styled-components'

const StyledPushDown = styled.i`
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
    border-bottom: 2px solid;
    bottom: -5px;
    left: -5px;
  }
  &::after {
    width: 8px;
    height: 8px;
    border-right: 2px solid;
    transform: rotate(45deg);
    left: -3px;
    bottom: 0;
  }
`

export const PushDown = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPushDown {...props} ref={ref} />
    </>
  )
})
