import React from 'react'
import styled from 'styled-components'

const StyledStack = styled.i`
  &,
  &::after,
  &::before {
    display: block;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    border: 2px solid;
  }
  & {
    margin-right: 8px;
    margin-top: 8px;
    transform: scale(var(--ggs, 1));
    position: relative;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    border-left: 0;
    border-bottom: 0;
    right: -5px;
    top: -5px;
  }
  &::before {
    right: -8px;
    top: -8px;
  }
`

export const Stack = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledStack {...props} ref={ref} />
    </>
  )
})
