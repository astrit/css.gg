import React from 'react'
import styled from 'styled-components'

const StyledRead = styled.i`
  &,
  &::after,
  &::before {
    display: block;
    box-sizing: border-box;
    border: 2px solid;
  }
  & {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-color: transparent;
    margin-left: -1px;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 6px;
    height: 5px;
    border-radius: 50px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    left: -10px;
    top: -5px;
    box-shadow: -6px 0 0 -4px currentColor;
  }
  &::after {
    left: 2px;
    box-shadow: 6px 0 0 -4px currentColor;
  }
`

export const Read = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledRead {...props} ref={ref} />
    </>
  )
})
