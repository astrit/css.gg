import React from 'react'
import styled from 'styled-components'

const StyledTwilio = styled.i`
  & {
    display: block;
    position: relative;
    box-sizing: border-box;
    transform: scale(var(--ggs, 1));
    width: 24px;
    height: 24px;
    border-radius: 22px;
    box-shadow: inset 0 0 0 3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
    background: currentColor;
    border-radius: 6px;
    width: 4px;
    height: 4px;
    top: 7px;
    box-shadow: 0 6px 0;
  }
  &::before {
    left: 7px;
  }
  &::after {
    right: 7px;
  }
`

export const Twilio = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTwilio {...props} ref={ref} />
    </>
  )
})
