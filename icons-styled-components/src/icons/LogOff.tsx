import React from 'react'
import styled from 'styled-components'

const StyledLogOff = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    border-radius: 16px;
    border: 2px solid;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 16px;
    border-top: 2px solid transparent;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    height: 8px;
    width: 2px;
    background: currentColor;
    left: 5px;
    bottom: 6px;
  }
`

export const LogOff = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledLogOff {...props} ref={ref} />
    </>
  )
})