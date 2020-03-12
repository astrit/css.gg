import React from 'react'
import styled from 'styled-components'

const StyledTerminal = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 24px;
    height: 20px;
    border: 2px solid;
    border-radius: 2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    border-right: 2px solid;
    border-bottom: 2px solid;
    transform: rotate(-45deg);
    width: 6px;
    height: 6px;
    top: 5px;
    left: 3px;
  }
  &::after {
    width: 4px;
    height: 2px;
    background: currentColor;
    top: 10px;
    left: 11px;
  }
`

export const Terminal = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTerminal {...props} ref={ref} />
    </>
  )
})
