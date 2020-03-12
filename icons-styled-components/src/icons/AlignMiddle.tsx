import React from 'react'
import styled from 'styled-components'

const StyledAlignMiddle = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    height: 12px;
    width: 12px;
    transform: scale(var(--ggs, 1));
    border-top: 2px solid transparent;
    margin-top: -8px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 4px;
    background: currentColor;
  }
  &::before {
    left: 1px;
    height: 12px;
    top: 2px;
  }
  &::after {
    height: 6px;
    right: 1px;
    top: 5px;
    opacity: 0.5;
  }
`

export const AlignMiddle = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledAlignMiddle {...props} ref={ref} />
    </>
  )
})
