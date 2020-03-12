import React from 'react'
import styled from 'styled-components'

const StyledCodeClimate = styled.i`
  & {
    display: block;
    box-sizing: border-box;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 24px;
    height: 16px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
    width: 12px;
    border-left: 4px solid;
    border-top: 4px solid;
    transform: rotate(45deg);
  }
  &::before {
    height: 12px;
    left: 2px;
    bottom: -2px;
  }
  &::after {
    height: 6px;
    right: 0;
    bottom: 6px;
  }
`

export const CodeClimate = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCodeClimate {...props} ref={ref} />
    </>
  )
})
