import React from 'react'
import styled from 'styled-components'

const StyledCornerDoubleLeftDown = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 12px;
    height: 12px;
    border-top-left-radius: 4px;
    border-top: 2px solid;
    border-left: 2px solid;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    border-right: 2px solid;
    transform: rotate(45deg);
  }
  &::after {
    border-top: 2px solid;
    top: -4px;
    right: 0;
  }
  &::before {
    border-bottom: 2px solid;
    left: -4px;
    bottom: 0;
  }
`

export const CornerDoubleLeftDown = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCornerDoubleLeftDown {...props} ref={ref} />
    </>
  )
})
