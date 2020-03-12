import React from 'react'
import styled from 'styled-components'

const StyledPlayListRemove = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 12px;
    height: 6px;
    border-top: 0 solid transparent;
    border-bottom: 2px solid transparent;
    box-shadow: inset 0 -2px 0, -2px 4px 0 -2px, 0 -2px 0 0;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 2px;
    background: currentColor;
    transform: rotate(-45deg);
    top: 8px;
    right: -4px;
  }
  &::before {
    width: 2px;
    height: 8px;
    top: 5px;
    right: -1px;
  }
`

export const PlayListRemove = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPlayListRemove {...props} ref={ref} />
    </>
  )
})
