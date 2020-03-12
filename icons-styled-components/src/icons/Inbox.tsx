import React from 'react'
import styled from 'styled-components'

const StyledInbox = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border: 2px solid;
    box-shadow: inset 0 -2px 0 0;
    border-radius: 3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    background: currentColor;
    height: 7px;
    width: 7px;
    border-radius: 2px;
    bottom: -2px;
  }
  &::before {
    left: -2px;
  }
  &::after {
    right: -2px;
  }
`

export const Inbox = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledInbox {...props} ref={ref} />
    </>
  )
})
