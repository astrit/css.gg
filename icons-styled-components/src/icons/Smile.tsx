import React from 'react'
import styled from 'styled-components'

const StyledSmile = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 20px;
    border: 2px solid;
    border-radius: 100px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 4px;
  }
  &::before {
    background: currentColor;
    box-shadow: 6px 0 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    top: 5px;
  }
  &::after {
    width: 8px;
    height: 4px;
    border-radius: 150px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border: 2px solid;
    border-top-color: transparent;
    top: 9px;
  }
`

export const Smile = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSmile {...props} ref={ref} />
    </>
  )
})
