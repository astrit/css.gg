import React from 'react'
import styled from 'styled-components'

const StyledUsb = styled.i`
  &,
  &::before {
    display: block;
    box-sizing: border-box;
  }
  & {
    position: relative;
    width: 14px;
    height: 14px;
    border: 2px solid;
    transform: scale(var(--ggs, 1));
    margin-bottom: -6px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  &::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 5px;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-top: 1px solid transparent;
    border-bottom: 2px solid transparent;
    box-shadow: 0 0 0 2px, inset 5px 4px 0 -4px, inset -5px 4px 0 -4px;
    top: -7px;
    left: 2px;
  }
`

export const Usb = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledUsb {...props} ref={ref} />
    </>
  )
})
