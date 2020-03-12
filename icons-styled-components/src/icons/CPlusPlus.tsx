import React from 'react'
import styled from 'styled-components'

const StyledCPlusPlus = styled.i`
  & {
    position: relative;
    display: block;
    width: 16px;
    height: 16px;
    transform: scale(var(--ggs, 1));
    border: 3px solid currentColor;
    box-sizing: border-box;
    border-radius: 100px;
    border-right-color: transparent;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    box-sizing: border-box;
    display: block;
    width: 9px;
    height: 6px;
    border-left: 2px solid;
    border-right: 2px solid;
    right: -9px;
    top: 2px;
  }
  &::after {
    width: 13px;
    height: 2px;
    border-left: 6px solid;
    border-right: 6px solid;
    right: -11px;
    top: 4px;
  }
`

export const CPlusPlus = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCPlusPlus {...props} ref={ref} />
    </>
  )
})
