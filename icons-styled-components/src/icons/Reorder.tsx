import React from 'react'
import styled from 'styled-components'

const StyledReorder = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 2px;
    border-radius: 3px;
    background: currentColor;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
  }
  &::before {
    border: 2px solid;
    width: 6px;
    height: 6px;
    left: 12px;
    top: -2px;
  }
  &::after {
    top: -4px;
    left: 0;
    width: 10px;
    height: 2px;
    opacity: 0.5;
    background: currentColor;
    box-shadow: 0 8px 0 0, 0 12px 0 0, 0 16px 0 0;
  }
`

export const Reorder = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledReorder {...props} ref={ref} />
    </>
  )
})
