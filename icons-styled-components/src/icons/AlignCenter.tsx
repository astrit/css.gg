import React from 'react'
import styled from 'styled-components'

const StyledAlignCenter = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    height: 12px;
    width: 12px;
    border-top: 2px solid transparent;
    transform: scale(var(--ggs, 1));
    margin-left: -4px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 4px;
    background: currentColor;
  }
  &::before {
    left: 2px;
    width: 12px;
    top: -2px;
  }
  &::after {
    width: 6px;
    right: 1px;
    top: 4px;
    opacity: 0.5;
  }
`

export const AlignCenter = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledAlignCenter {...props} ref={ref} />
    </>
  )
})
