import React from 'react'
import styled from 'styled-components'

const StyledCornerDoubleRightUp = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 12px;
    height: 12px;
    border-bottom-right-radius: 4px;
    border-bottom: 2px solid;
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
    border-left: 2px solid;
    transform: rotate(45deg);
  }
  &::after {
    border-bottom: 2px solid;
    bottom: -4px;
    left: 0;
  }
  &::before {
    border-top: 2px solid;
    right: -4px;
    top: 0;
  }
`

export const CornerDoubleRightUp = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCornerDoubleRightUp {...props} ref={ref} />
    </>
  )
})
