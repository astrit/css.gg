import React from 'react'
import styled from 'styled-components'

const StyledArrowLeftR = styled.i`
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
    left: 4px;
  }
  &::after {
    width: 6px;
    height: 6px;
    border-bottom: 2px solid;
    border-left: 2px solid;
    transform: rotate(45deg);
    bottom: 6px;
  }
  &::before {
    width: 10px;
    height: 2px;
    bottom: 8px;
    background: currentColor;
  }
`

export const ArrowLeftR = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowLeftR {...props} ref={ref} />
    </>
  )
})
