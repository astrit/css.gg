import React from 'react'
import styled from 'styled-components'

const StyledMoreVertical = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 6px;
    height: 6px;
    border: 2px solid;
    border-radius: 100%;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 6px;
    left: -2px;
  }
  &::before {
    top: -10px;
  }
`

export const MoreVertical = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMoreVertical {...props} ref={ref} />
    </>
  )
})
