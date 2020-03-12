import React from 'react'
import styled from 'styled-components'

const StyledTv = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 11px;
    border: 2px solid;
    border-radius: 2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    border-left: 2px solid;
    border-bottom: 2px solid;
    border-bottom-left-radius: 2px;
    top: -6px;
    left: 3px;
    transform: rotate(-45deg);
    width: 6px;
    height: 5px;
  }
  &::after {
    width: 8px;
    height: 1px;
    background: currentColor;
    border-radius: 10px;
    bottom: -4px;
    right: 2px;
  }
`

export const Tv = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTv {...props} ref={ref} />
    </>
  )
})
