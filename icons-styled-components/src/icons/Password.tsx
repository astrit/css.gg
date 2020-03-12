import React from 'react'
import styled from 'styled-components'

const StyledPassword = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 30px;
    height: 12px;
    border: 2px solid;
    border-radius: 3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 4px;
    background: currentColor;
  }
  &::before {
    left: 2px;
    top: 2px;
    box-shadow: 6px 0 0, 12px 0 0;
    height: 4px;
    border-radius: 100%;
  }
  &::after {
    height: 2px;
    right: 2px;
    bottom: 2px;
  }
`

export const Password = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPassword {...props} ref={ref} />
    </>
  )
})
