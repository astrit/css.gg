import React from 'react'
import styled from 'styled-components'

const StyledFormatIndentDecrease = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 14px;
    border-top: 2px solid;
    border-bottom: 2px solid;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    top: 2px;
  }
  &::before {
    border-right: 4px solid;
    left: 1px;
    width: 0;
    height: 0;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
  }
  &::after {
    width: 8px;
    height: 6px;
    border-top: 2px solid;
    border-bottom: 2px solid;
    right: 0;
  }
`

export const FormatIndentDecrease = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFormatIndentDecrease {...props} ref={ref} />
    </>
  )
})
