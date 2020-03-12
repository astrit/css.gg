import React from 'react'
import styled from 'styled-components'

const StyledPathFront = styled.i`
  & {
    display: block;
    position: relative;
    box-sizing: border-box;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 14px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    display: block;
    box-sizing: border-box;
    width: 10px;
    height: 10px;
  }
  &::after {
    border-left: 5px solid;
    border-top: 5px solid;
  }
  &::before {
    border: 2px solid;
    bottom: 0;
    right: 0;
  }
`

export const PathFront = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPathFront {...props} ref={ref} />
    </>
  )
})
