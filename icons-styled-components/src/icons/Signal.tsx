import React from 'react'
import styled from 'styled-components'

const StyledSignal = styled.i`
  &,
  &::after,
  &::before {
    display: block;
    box-sizing: border-box;
    width: 2px;
    border-radius: 4px;
    background: currentColor;
  }
  & {
    position: relative;
    transform: scale(var(--ggs, 1));
    height: 8px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
  }
  &::before {
    height: 12px;
    left: 4px;
    bottom: 0;
  }
  &::after {
    height: 4px;
    left: -4px;
    bottom: 0;
  }
`

export const Signal = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSignal {...props} ref={ref} />
    </>
  )
})
