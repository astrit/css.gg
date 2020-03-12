import React from 'react'
import styled from 'styled-components'

const StyledExpand = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 6px;
    height: 6px;
    border-bottom: 2px solid;
    border-left: 2px solid;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::after {
    background: currentColor;
    bottom: 4px;
    transform: rotate(-44deg);
    width: 14px;
    height: 2px;
    left: -2px;
  }
  &::before {
    width: 6px;
    height: 6px;
    border-top: 2px solid;
    border-right: 2px solid;
    left: 5px;
    top: -7px;
  }
`

export const Expand = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledExpand {...props} ref={ref} />
    </>
  )
})
