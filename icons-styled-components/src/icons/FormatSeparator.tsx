import React from 'react'
import styled from 'styled-components'

const StyledFormatSeparator = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 18px;
    height: 2px;
    border-radius: 3px;
    background: currentColor;
  }
  &::after {
    content: '';
    position: absolute;
    top: -12px;
    left: 3px;
    opacity: 0.5;
    width: 12px;
    box-shadow: 0 4px 0 0, 0 8px 0 0, 0 16px 0 0;
  }
`

export const FormatSeparator = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFormatSeparator {...props} ref={ref} />
    </>
  )
})
