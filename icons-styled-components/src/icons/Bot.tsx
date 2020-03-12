import React from 'react'
import styled from 'styled-components'

const StyledBot = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 21px;
    height: 10px;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
    border-bottom: 1px solid transparent;
    border-radius: 12px;
    box-shadow: 0 0 0 2px, -4px 0 0 -1px, 4px 0 0 -1px, inset 0 -4px 0 -2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 2px;
    height: 2px;
    box-shadow: 0 0 0 2px;
    top: 3px;
  }
  &::before {
    left: -4px;
    border-radius: 3px;
  }
  &::after {
    border-radius: 100px;
    right: -4px;
  }
`

export const Bot = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBot {...props} ref={ref} />
    </>
  )
})
