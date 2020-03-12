import React from 'react'
import styled from 'styled-components'

const StyledServer = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 20px;
    border: 2px solid;
    border-radius: 3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 2px;
    background: currentColor;
  }
  &::before {
    top: 2px;
    box-shadow: 0 4px 0;
    border-radius: 3px;
    width: 8px;
    left: 2px;
  }
  &::after {
    width: 2px;
    border-radius: 10px;
    left: 5px;
    bottom: 2px;
  }
`

export const Server = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledServer {...props} ref={ref} />
    </>
  )
})
