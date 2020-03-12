import React from 'react'
import styled from 'styled-components'

const StyledMoveRight = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 8px;
    height: 10px;
    border-top: 2px solid;
    border-bottom: 2px solid;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    background: currentColor;
    left: 0;
    top: 2px;
    width: 12px;
    height: 2px;
  }
  &::after {
    width: 0;
    height: 0;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-left: 5px solid;
    right: -7px;
  }
`

export const MoveRight = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMoveRight {...props} ref={ref} />
    </>
  )
})
