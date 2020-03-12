import React from 'react'
import styled from 'styled-components'

const StyledQr = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 14px;
    height: 14px;
    box-shadow: -6px -6px 0 -4px, 6px 6px 0 -4px, 6px -6px 0 -4px, -6px 6px 0 -4px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: currentColor;
    box-shadow: 0 6px 0, 6px 6px 0, 6px 0 0;
    top: 2px;
    left: 2px;
  }
`

export const Qr = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledQr {...props} ref={ref} />
    </>
  )
})
