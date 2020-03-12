import React from 'react'
import styled from 'styled-components'

const StyledDuplicate = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 10px;
    height: 10px;
    border: 2px solid transparent;
    border-bottom: 4px solid transparent;
    box-shadow: 0 0 0 2px, inset 0 -2px 0 0;
    margin-left: -4px;
    margin-top: 4px;
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
    left: 2px;
    bottom: -2px;
    width: 2px;
    height: 6px;
  }
  &::after {
    width: 14px;
    height: 14px;
    border-right: 2px solid;
    border-top: 2px solid;
    right: -8px;
    top: -8px;
  }
`

export const Duplicate = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDuplicate {...props} ref={ref} />
    </>
  )
})
