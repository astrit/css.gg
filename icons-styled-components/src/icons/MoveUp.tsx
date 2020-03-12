import React from 'react'
import styled from 'styled-components'

const StyledMoveUp = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 10px;
    height: 8px;
    border-left: 2px solid;
    border-right: 2px solid;
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
    left: 2px;
    bottom: 0;
    width: 2px;
    height: 12px;
  }
  &::after {
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-bottom: 5px solid;
    top: -7px;
  }
`

export const MoveUp = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMoveUp {...props} ref={ref} />
    </>
  )
})
