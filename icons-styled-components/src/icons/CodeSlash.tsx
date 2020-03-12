import React from 'react'
import styled from 'styled-components'

const StyledCodeSlash = styled.i`
  & {
    display: block;
    position: relative;
    box-sizing: border-box;
    transform: rotate(15deg) scale(var(--ggs, 1));
    width: 2px;
    height: 16px;
    background: currentColor;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 8px;
    transform: rotate(-60deg);
  }
  &::before {
    border-left: 2px solid;
    border-top: 2px solid;
    left: -8px;
    top: 5px;
  }
  &::after {
    border-right: 2px solid;
    border-bottom: 2px solid;
    right: -8px;
    top: 3px;
  }
`

export const CodeSlash = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCodeSlash {...props} ref={ref} />
    </>
  )
})
