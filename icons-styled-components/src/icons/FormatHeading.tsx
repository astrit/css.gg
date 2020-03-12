import React from 'react'
import styled from 'styled-components'

const StyledFormatHeading = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 12px;
    height: 14px;
    border-left: 2px solid;
    border-right: 2px solid;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 12px;
    height: 2px;
    background: currentColor;
    top: 6px;
    left: -2px;
  }
`

export const FormatHeading = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFormatHeading {...props} ref={ref} />
    </>
  )
})
