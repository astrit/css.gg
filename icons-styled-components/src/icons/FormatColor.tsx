import React from 'react'
import styled from 'styled-components'

const StyledFormatColor = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 9px;
    height: 2px;
    background: currentColor;
    transform: scale(var(--ggs, 1));
    border-radius: 3px;
    box-shadow: -2px 8px 0 0, 2px 8px 0 0;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 2px;
    height: 14px;
    background: currentColor;
    top: -8px;
  }
  &::before {
    transform: rotate(25deg);
    left: 1px;
  }
  &::after {
    transform: rotate(-25deg);
    right: 1px;
  }
`

export const FormatColor = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFormatColor {...props} ref={ref} />
    </>
  )
})
