import React from 'react'
import styled from 'styled-components'

const StyledRemote = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 8px;
    height: 8px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    border-left: 2px solid;
    border-bottom: 2px solid;
    transform: rotate(45deg) scaleY(1);
  }
  &::before {
    left: 5px;
    top: -2px;
  }
  &::after {
    transform: rotate(-45deg) scaleX(-1);
    left: -5px;
    top: 2px;
  }
`

export const Remote = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledRemote {...props} ref={ref} />
    </>
  )
})
