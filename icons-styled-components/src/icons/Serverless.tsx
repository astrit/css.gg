import React from 'react'
import styled from 'styled-components'

const StyledServerless = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 15px;
    height: 13px;
    overflow: hidden;
  }
  &::after,
  &::before {
    background: currentColor;
    content: '';
    box-sizing: border-box;
    position: absolute;
    display: block;
    height: 3px;
    box-shadow: 0 5px 0, 0 10px 0;
    transform: skew(-20deg);
  }
  &::before {
    width: 8px;
    left: -2px;
  }
  &::after {
    width: 12px;
    right: -5px;
  }
`

export const Serverless = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledServerless {...props} ref={ref} />
    </>
  )
})
