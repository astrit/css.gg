import React from 'react'
import styled from 'styled-components'

const StyledShortcut = styled.i`
  &,
  &::after {
    display: block;
    box-sizing: border-box;
    border-radius: 3px;
  }
  & {
    border: 2px solid;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 12px;
    background: currentColor;
    left: 6px;
    top: 1px;
    transform: rotate(45deg);
  }
`

export const Shortcut = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledShortcut {...props} ref={ref} />
    </>
  )
})
