import React from 'react'
import styled from 'styled-components'

const StyledLoadbar = styled.i`
  @keyframes loadbar {
    0%,
    to {
      left: 0;
      right: 80%;
    }
    25%,
    75% {
      left: 0;
      right: 0;
    }
    50% {
      left: 80%;
      right: 0;
    }
  }
  &,
  &::before {
    display: block;
    box-sizing: border-box;
    height: 4px;
  }
  & {
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 18px;
  }
  &::before {
    content: '';
    position: absolute;
    border-radius: 4px;
    background: currentColor;
    animation: loadbar 2s cubic-bezier(0, 0, 0.58, 1) infinite;
  }
`

export const Loadbar = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledLoadbar {...props} ref={ref} />
    </>
  )
})
