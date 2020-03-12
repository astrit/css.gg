import React from 'react'
import styled from 'styled-components'

const StyledKeyhole = styled.i`
  &,
  &::after,
  &::before {
    display: block;
    box-sizing: border-box;
    border-radius: 20px;
  }
  & {
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 20px;
    border: 2px solid;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
  }
  &::before {
    width: 6px;
    height: 6px;
    border: 2px solid;
    left: 5px;
    top: 3px;
  }
  &::after {
    background: currentColor;
    width: 2px;
    height: 5px;
    left: 7px;
    bottom: 3px;
  }
`

export const Keyhole = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledKeyhole {...props} ref={ref} />
    </>
  )
})
