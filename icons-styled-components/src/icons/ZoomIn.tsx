import React from 'react'
import styled from 'styled-components'

const StyledZoomIn = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 16px;
    border: 2px solid;
    border-radius: 100%;
    background: linear-gradient(to bottom, currentColor 5px, transparent 0) no-repeat 2px 5px/8px
      2px;
    margin-top: -4px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 2px;
    height: 8px;
    background: currentColor;
  }
  &::after {
    transform: rotate(-45deg);
    border-radius: 3px;
    top: 10px;
    left: 12px;
  }
  &::before {
    top: 2px;
    left: 5px;
  }
`

export const ZoomIn = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledZoomIn {...props} ref={ref} />
    </>
  )
})
