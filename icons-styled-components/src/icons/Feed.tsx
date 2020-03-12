import React from 'react'
import styled from 'styled-components'

const StyledFeed = styled.i`
  &,
  &::after,
  &::before {
    display: block;
    box-sizing: border-box;
    background: currentColor;
    box-shadow: 0 10px 0 0;
  }
  & {
    margin-left: -8px;
    margin-top: -8px;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 7px;
    height: 7px;
    border-radius: 1px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    border-radius: 3px;
    width: 12px;
    height: 2px;
    top: 1px;
    left: 9px;
    opacity: 0.8;
  }
  &::after {
    width: 8px;
    top: 4px;
    opacity: 0.5;
  }
`

export const Feed = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFeed {...props} ref={ref} />
    </>
  )
})
