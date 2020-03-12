import React from 'react'
import styled from 'styled-components'

const StyledLinear = styled.i`
  & {
    display: block;
    position: relative;
    box-sizing: border-box;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    overflow: hidden;
    border-radius: 100px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 25px;
    height: 25px;
    transform: rotate(-45deg);
    background: currentColor;
    top: -14px;
    left: 4px;
  }
  &::after {
    width: 2px;
    box-shadow: -3px 4px 0 0, -6px -2px 0 0;
    top: -3px;
    left: 6px;
  }
`

export const Linear = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledLinear {...props} ref={ref} />
    </>
  )
})
