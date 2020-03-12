import React from 'react'
import styled from 'styled-components'

const StyledExternal = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 12px;
    height: 12px;
    box-shadow: -2px 2px 0 0, -4px -4px 0 -2px, 4px 4px 0 -2px;
    margin-left: -2px;
    margin-top: 1px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    right: -4px;
  }
  &::before {
    background: currentColor;
    transform: rotate(-45deg);
    width: 12px;
    height: 2px;
    top: 1px;
  }
  &::after {
    width: 8px;
    height: 8px;
    border-right: 2px solid;
    border-top: 2px solid;
    top: -4px;
  }
`

export const External = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledExternal {...props} ref={ref} />
    </>
  )
})
