import React from 'react'
import styled from 'styled-components'

const StyledClipboard = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border: 2px solid;
    border-radius: 2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 2px;
    width: 10px;
    left: 2px;
  }
  &::before {
    border: 2px solid;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    top: -2px;
    height: 6px;
  }
  &::after {
    height: 2px;
    background: currentColor;
    box-shadow: 0 -4px 0 0;
    bottom: 2px;
  }
`

export const Clipboard = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledClipboard {...props} ref={ref} />
    </>
  )
})
