import React from 'react'
import styled from 'styled-components'

const StyledDatabase = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 14px;
    border: 2px solid transparent;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    border-left: 6px solid transparent;
    box-shadow: 0 0 0 2px, inset 0 2px 0 0, inset 0 -2px 0 0;
    border-radius: 1px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    background: currentColor;
    width: 20px;
    height: 2px;
    top: 4px;
    left: -8px;
  }
  &::after {
    width: 2px;
    height: 10px;
    border-bottom: 2px solid;
    border-top: 2px solid;
    top: 0;
    left: -4px;
  }
`

export const Database = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDatabase {...props} ref={ref} />
    </>
  )
})
