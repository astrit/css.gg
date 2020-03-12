import React from 'react'
import styled from 'styled-components'

const StyledCode = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 8px;
    height: 20px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    height: 8px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    transform: rotate(45deg) scaleY(1);
    left: -4px;
    top: 6px;
  }
  &::after {
    transform: rotate(-45deg) scaleX(-1);
    left: 4px;
  }
`

export const Code = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCode {...props} ref={ref} />
    </>
  )
})
