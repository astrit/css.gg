import React from 'react'
import styled from 'styled-components'

const StyledMailOpen = styled.i`
  &,
  &::after {
    display: block;
    box-sizing: border-box;
    height: 14px;
    border: 2px solid;
  }
  & {
    border-top: 0;
    transform: scale(var(--ggs, 1));
    position: relative;
    width: 18px;
    border-radius: 2px;
  }
  &::after {
    content: '';
    position: absolute;
    border-radius: 3px;
    width: 14px;
    transform: rotate(-45deg);
    bottom: 3px;
    left: 0;
  }
`

export const MailOpen = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMailOpen {...props} ref={ref} />
    </>
  )
})
