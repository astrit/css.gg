import React from 'react'
import styled from 'styled-components'

const StyledShare = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 6px;
    height: 6px;
    background: currentColor;
    border-radius: 100px;
    box-shadow: 10px -6px 0, 10px 6px 0;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 10px;
    height: 2px;
    background: currentColor;
    left: 2px;
  }
  &::before {
    top: 0;
    transform: rotate(-35deg);
  }
  &::after {
    bottom: 0;
    transform: rotate(35deg);
  }
`

export const Share = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledShare {...props} ref={ref} />
    </>
  )
})
