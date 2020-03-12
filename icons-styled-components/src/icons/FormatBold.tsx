import React from 'react'
import styled from 'styled-components'

const StyledFormatBold = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 8px;
    height: 8px;
    border: 2px solid;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 10px;
    left: -2px;
    top: 4px;
  }
`

export const FormatBold = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFormatBold {...props} ref={ref} />
    </>
  )
})
