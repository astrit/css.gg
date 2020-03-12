import React from 'react'
import styled from 'styled-components'

const StyledScrollH = styled.i`
  &,
  &::after,
  &::before {
    display: block;
    box-sizing: border-box;
    width: 6px;
    height: 6px;
  }
  & {
    position: relative;
    transform: scale(var(--ggs, 1));
    border: 2px solid;
    border-radius: 10px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    transform: rotate(45deg);
    top: -2px;
  }
  &::after {
    border-top: 2px solid;
    border-right: 2px solid;
    right: -8px;
  }
  &::before {
    border-bottom: 2px solid;
    border-left: 2px solid;
    left: -8px;
  }
`

export const ScrollH = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledScrollH {...props} ref={ref} />
    </>
  )
})
