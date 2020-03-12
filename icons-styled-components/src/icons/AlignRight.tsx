import React from 'react'
import styled from 'styled-components'

const StyledAlignRight = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    height: 12px;
    width: 12px;
    border-right: 2px solid;
    transform: scale(var(--ggs, 1));
    margin-right: -4px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 4px;
    width: 12px;
    background: currentColor;
    right: 2px;
    top: 1px;
  }
  &::after {
    width: 6px;
    top: 7px;
    opacity: 0.5;
  }
`

export const AlignRight = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledAlignRight {...props} ref={ref} />
    </>
  )
})
