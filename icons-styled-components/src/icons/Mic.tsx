import React from 'react'
import styled from 'styled-components'

const StyledMic = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 12px;
    border-bottom-left-radius: 120px;
    border-bottom-right-radius: 120px;
    border: 2px solid;
    border-top: 0;
    margin-top: 3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::after {
    border: 2px solid;
    width: 8px;
    height: 18px;
    left: 2px;
    top: -10px;
    border-radius: 4px;
  }
  &::before {
    width: 10px;
    height: 4px;
    top: 12px;
    left: 1px;
    border-right: 4px solid transparent;
    box-shadow: 0 2px 0, inset -2px 0 0;
  }
`

export const Mic = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMic {...props} ref={ref} />
    </>
  )
})
