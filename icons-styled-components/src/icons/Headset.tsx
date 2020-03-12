import React from 'react'
import styled from 'styled-components'

const StyledHeadset = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border-top-left-radius: 120px;
    border-top-right-radius: 120px;
    border: 2px solid;
    border-bottom: 0;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border: 2px solid;
    width: 6px;
    height: 8px;
    top: 8px;
  }
  &::before {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    left: -2px;
  }
  &::after {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    left: 10px;
  }
`

export const Headset = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledHeadset {...props} ref={ref} />
    </>
  )
})
