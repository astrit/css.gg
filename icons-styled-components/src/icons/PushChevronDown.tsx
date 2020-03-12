import React from 'react'
import styled from 'styled-components'

const StyledPushChevronDown = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 100px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-bottom: 2px solid;
  }
  &::before {
    bottom: 0;
    width: 14px;
    height: 2px;
    left: 2px;
  }
  &::after {
    width: 10px;
    height: 10px;
    border-right: 2px solid;
    transform: rotate(45deg);
    left: 4px;
    top: 2px;
  }
`

export const PushChevronDown = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPushChevronDown {...props} ref={ref} />
    </>
  )
})
