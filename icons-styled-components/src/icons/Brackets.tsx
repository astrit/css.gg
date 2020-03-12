import React from 'react'
import styled from 'styled-components'

const StyledBrackets = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border: 2px solid;
    border-radius: 3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border: 2px solid;
    width: 4px;
    height: 10px;
    top: 2px;
  }
  &::before {
    border-right: 0;
    left: 2px;
  }
  &::after {
    border-left: 0;
    right: 2px;
  }
`

export const Brackets = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBrackets {...props} ref={ref} />
    </>
  )
})
