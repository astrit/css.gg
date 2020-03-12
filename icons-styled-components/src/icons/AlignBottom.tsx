import React from 'react'
import styled from 'styled-components'

const StyledAlignBottom = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    height: 12px;
    width: 12px;
    border-bottom: 2px solid;
    transform: scale(var(--ggs, 1));
    margin-top: 4px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 4px;
    background: currentColor;
    bottom: 2px;
  }
  &::before {
    left: 1px;
    height: 12px;
  }
  &::after {
    height: 6px;
    right: 1px;
    opacity: 0.5;
  }
`

export const AlignBottom = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledAlignBottom {...props} ref={ref} />
    </>
  )
})
