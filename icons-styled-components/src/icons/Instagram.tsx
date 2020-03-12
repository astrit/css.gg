import React from 'react'
import styled from 'styled-components'

const StyledInstagram = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
    border-radius: 4px;
    width: 20px;
    height: 20px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::after {
    border: 2px solid;
    left: 3px;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    top: 3px;
  }
  &::before {
    border-radius: 3px;
    width: 2px;
    height: 2px;
    background: currentColor;
    right: 1px;
    top: 1px;
  }
`

export const Instagram = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledInstagram {...props} ref={ref} />
    </>
  )
})
