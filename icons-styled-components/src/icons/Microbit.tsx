import React from 'react'
import styled from 'styled-components'

const StyledMicrobit = styled.i`
  &,
  &::before {
    display: block;
    box-sizing: border-box;
    border-radius: 20px;
  }
  & {
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 24px;
    height: 14px;
    border: 3px solid;
  }
  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: currentColor;
    top: 2px;
    left: 2px;
    box-shadow: 10px 0 0 0;
  }
`

export const Microbit = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMicrobit {...props} ref={ref} />
    </>
  )
})
