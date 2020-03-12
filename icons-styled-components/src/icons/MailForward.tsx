import React from 'react'
import styled from 'styled-components'

const StyledMailForward = styled.i`
  &,
  &::before {
    display: block;
    box-sizing: border-box;
    height: 6px;
    border-top: 2px solid;
  }
  & {
    border-left: 2px solid;
    transform: scale(var(--ggs, 1));
    border-top-left-radius: 4px;
    position: relative;
    width: 14px;
  }
  &::before {
    content: '';
    position: absolute;
    width: 6px;
    border-right: 2px solid;
    top: -4px;
    right: -1px;
    transform: rotate(45deg);
  }
`

export const MailForward = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMailForward {...props} ref={ref} />
    </>
  )
})
