import React from 'react'
import styled from 'styled-components'

const StyledScrollV = styled.i`
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
    transform: rotate(-45deg);
    left: -2px;
  }
  &::after {
    border-bottom: 2px solid;
    border-left: 2px solid;
    bottom: -8px;
  }
  &::before {
    border-top: 2px solid;
    border-right: 2px solid;
    top: -8px;
  }
`

export const ScrollV = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledScrollV {...props} ref={ref} />
    </>
  )
})
