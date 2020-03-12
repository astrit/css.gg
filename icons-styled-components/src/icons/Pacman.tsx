import React from 'react'
import styled from 'styled-components'

const StyledPacman = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: rotate(45deg) scale(var(--ggs, 1));
    width: 10px;
    height: 10px;
    border-bottom: 2px solid;
    border-left: 2px solid;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
  }
  &::before {
    background: currentColor;
    top: 5px;
    border-radius: 3px;
    width: 2px;
    height: 2px;
    left: -5px;
  }
  &::after {
    width: 18px;
    height: 18px;
    border: 2px solid;
    border-radius: 100px;
    border-right-color: transparent;
    left: -10px;
    transform: rotate(-45deg);
  }
`

export const Pacman = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPacman {...props} ref={ref} />
    </>
  )
})
