import React from 'react'
import styled from 'styled-components'

const StyledFormatCenter = styled.i`
  &,
  &::before {
    display: block;
    box-sizing: border-box;
    height: 2px;
    background: currentColor;
    border-radius: 3px;
    box-shadow: 0 8px 0;
  }
  & {
    margin-top: -12px;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 16px;
  }
  &::before {
    content: '';
    position: absolute;
    width: 10px;
    top: 4px;
    left: 3px;
  }
`

export const FormatCenter = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFormatCenter {...props} ref={ref} />
    </>
  )
})
