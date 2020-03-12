import React from 'react'
import styled from 'styled-components'

const StyledHello = styled.i`
  & {
    display: block;
    position: relative;
    box-sizing: border-box;
    transform: scale(var(--ggs, 1));
    overflow: hidden;
    width: 20px;
    height: 20px;
    border-radius: 6px;
    border-bottom-left-radius: 0;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
  }
  &::before {
    width: 30px;
    height: 30px;
    border: 8px solid;
    left: -5px;
    top: -5px;
    border-radius: 30px;
  }
  &::after {
    width: 10px;
    height: 5px;
    background: currentColor;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    bottom: 5px;
    left: 5px;
  }
`

export const Hello = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledHello {...props} ref={ref} />
    </>
  )
})
