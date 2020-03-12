import React from 'react'
import styled from 'styled-components'

const StyledExtension = styled.i`
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    display: block;
    border: 2px solid;
    border-radius: 3px;
  }
  & {
    position: relative;
    transform: translateX(-10px) scale(var(--ggs, 1));
    width: 8px;
    height: 14px;
    border-bottom-right-radius: 0;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    height: 8px;
  }
  &::before {
    bottom: -2px;
    left: -2px;
    width: 14px;
    border-top-left-radius: 0;
  }
  &::after {
    top: -5px;
    right: -11px;
    width: 8px;
  }
`

export const Extension = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledExtension {...props} ref={ref} />
    </>
  )
})
