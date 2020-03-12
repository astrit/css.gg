import React from 'react'
import styled from 'styled-components'

const StyledSpinnerAlt = styled.i`
  @keyframes spinneralt {
    0% {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
  }
  &::before {
    content: '';
    position: absolute;
    border-radius: 100px;
    animation: spinneralt 1s cubic-bezier(0.6, 0, 0.4, 1) infinite;
    border: 3px solid transparent;
    border-top-color: currentColor;
  }
`

export const SpinnerAlt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSpinnerAlt {...props} ref={ref} />
    </>
  )
})
