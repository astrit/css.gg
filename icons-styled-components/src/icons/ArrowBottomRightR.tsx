import React from 'react'
import styled from 'styled-components'

const StyledArrowBottomRightR = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 22px;
    height: 22px;
    border: 2px solid;
    transform: scale(var(--ggs, 1));
    border-radius: 4px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    right: 4px;
  }
  &::after {
    width: 10px;
    height: 2px;
    background: currentColor;
    transform: rotate(45deg);
    bottom: 8px;
  }
  &::before {
    width: 6px;
    height: 6px;
    bottom: 4px;
    border-bottom: 2px solid;
    border-right: 2px solid;
  }
`

export const ArrowBottomRightR = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowBottomRightR {...props} ref={ref} />
    </>
  )
})
