import React from 'react'
import styled from 'styled-components'

const StyledCornerDoubleUpLeft = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 12px;
    height: 12px;
    border-top-right-radius: 4px;
    border-top: 2px solid;
    border-right: 2px solid;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    border-bottom: 2px solid;
    transform: rotate(45deg);
  }
  &::after {
    border-left: 2px solid;
    top: -4px;
  }
  &::before {
    border-right: 2px solid;
    right: -4px;
    bottom: 0;
  }
`

export const CornerDoubleUpLeft = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCornerDoubleUpLeft {...props} ref={ref} />
    </>
  )
})
