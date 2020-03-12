import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: rotate(-45deg) scale(var(--ggs, 1));
    width: 8px;
    height: 2px;
    background: currentColor;
    border-radius: 4px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 8px;
    height: 10px;
    border: 2px solid;
    top: -4px;
  }
  &::before {
    border-right: 0;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    left: -6px;
  }
  &::after {
    border-left: 0;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    right: -6px;
  }
`

export const Link = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledLink {...props} ref={ref} />
    </>
  )
})
