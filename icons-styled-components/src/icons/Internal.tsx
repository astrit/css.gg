import React from 'react'
import styled from 'styled-components'

const StyledInternal = styled.i`
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
    left: 2px;
  }
  &::before {
    background: currentColor;
    transform: rotate(-45deg);
    width: 14px;
    height: 2px;
    bottom: 8px;
  }
  &::after {
    width: 7px;
    height: 7px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    bottom: 2px;
  }
`

export const Internal = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledInternal {...props} ref={ref} />
    </>
  )
})
