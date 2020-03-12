import React from 'react'
import styled from 'styled-components'

const StyledSpinner = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    border-radius: 100px;
  }
  &::before {
    animation: spinner 1s cubic-bezier(0.6, 0, 0.4, 1) infinite;
    border: 3px solid transparent;
    border-top-color: currentColor;
  }
  &::after {
    border: 3px solid;
    opacity: 0.2;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`

export const Spinner = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSpinner {...props} ref={ref} />
    </>
  )
})
