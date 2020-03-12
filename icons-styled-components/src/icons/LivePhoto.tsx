import React from 'react'
import styled from 'styled-components'

const StyledLivePhoto = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 100px;
    border: 2px dotted currentColor;
  }
  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border: 1px solid transparent;
    top: 4px;
    left: 4px;
    box-shadow: 0 0 0 2px, inset 0 0 0 2px currentColor;
  }
`

export const LivePhoto = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledLivePhoto {...props} ref={ref} />
    </>
  )
})
