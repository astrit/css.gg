import React from 'react'
import styled from 'styled-components'

const StyledFormatText = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 10px;
    height: 8px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    box-shadow: 0 -2px 0 0, inset 0 0 0 2px;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 18px;
    height: 18px;
    border: 1px dashed;
    top: -6px;
    left: -8px;
  }
`

export const FormatText = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFormatText {...props} ref={ref} />
    </>
  )
})
