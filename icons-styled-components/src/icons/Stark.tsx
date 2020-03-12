import React from 'react'
import styled from 'styled-components'

const StyledStark = styled.i`
  & {
    background: currentColor;
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: rotate(45deg) scale(var(--ggs, 1));
    width: 3px;
    height: 16px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 16px;
    border: 3px solid;
  }
  &::before {
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    border-right: 0;
    border-top-color: transparent;
    left: -7px;
    bottom: 0;
  }
  &::after {
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    border-left: 0;
    border-bottom-color: transparent;
    right: -7px;
    top: 0;
  }
`

export const Stark = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledStark {...props} ref={ref} />
    </>
  )
})
