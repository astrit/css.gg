import React from 'react'
import styled from 'styled-components'

const StyledTrending = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: rotate(-45deg) scale(var(--ggs, 1));
    width: 10px;
    height: 8px;
    border-top: 2px solid;
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
    left: 8px;
    width: 10px;
    height: 2px;
    bottom: 0;
  }
  &::after {
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 6px solid;
    bottom: -3px;
    right: -14px;
  }
`

export const Trending = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTrending {...props} ref={ref} />
    </>
  )
})
