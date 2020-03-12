import React from 'react'
import styled from 'styled-components'

const StyledUnavailable = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: rotate(-45deg) scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border: 2px solid;
    border-radius: 100px;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 2px;
    height: 18px;
    background: currentColor;
    top: -2px;
    left: 6px;
  }
`

export const Unavailable = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledUnavailable {...props} ref={ref} />
    </>
  )
})
