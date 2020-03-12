import React from 'react'
import styled from 'styled-components'

const StyledColorPicker = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: rotate(-45deg) scale(var(--ggs, 1));
    width: 18px;
    height: 10px;
    border-left: 0;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
    box-shadow: inset 0 0 0 2px;
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
    top: -2px;
    border-radius: 3px;
    width: 2px;
    height: 10px;
    right: -3px;
  }
  &::after {
    width: 8px;
    height: 6px;
    right: -9px;
    box-shadow: -21px 0 0 -2px;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
  }
`

export const ColorPicker = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledColorPicker {...props} ref={ref} />
    </>
  )
})
