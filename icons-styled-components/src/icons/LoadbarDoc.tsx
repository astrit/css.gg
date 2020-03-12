import React from 'react'
import styled from 'styled-components'

const StyledLoadbarDoc = styled.i`
  @keyframes gg-doc {
    0% {
      left: -16px;
    }
    60%,
    to {
      left: 0;
    }
  }
  & {
    display: block;
    position: relative;
    box-sizing: border-box;
    transform: scale(var(--ggs, 1));
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
    border-radius: 1px;
    width: 12px;
    height: 14px;
    overflow: hidden;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
    height: 2px;
    background: currentColor;
    animation: gg-doc 1s linear infinite alternate;
  }
  &::before {
    width: 14px;
    box-shadow: -4px 4px 0;
  }
  &::after {
    width: 5px;
    top: 8px;
  }
`

export const LoadbarDoc = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledLoadbarDoc {...props} ref={ref} />
    </>
  )
})
