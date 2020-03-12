import React from 'react'
import styled from 'styled-components'

const StyledErase = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 10px;
    border: 2px solid;
    border-radius: 2px;
    transform: rotate(-45deg);
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    background: currentColor;
  }
  &::before {
    top: -1px;
    width: 3px;
    height: 8px;
    left: 4px;
  }
  &::after {
    border-radius: 3px;
    width: 18px;
    height: 2px;
    transform: rotate(45deg);
    bottom: -3px;
    left: -8px;
  }
`

export const Erase = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledErase {...props} ref={ref} />
    </>
  )
})
