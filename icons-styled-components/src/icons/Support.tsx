import React from 'react'
import styled from 'styled-components'

const StyledSupport = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
    transform: rotate(45deg) scale(var(--ggs, 1));
    border: 5px solid transparent;
    box-shadow: 0 0 0 2px, inset 0 0 0 2px;
    border-radius: 40px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    border-left: 9px solid;
    border-right: 9px solid;
    width: 24px;
    height: 2px;
    left: -7px;
    top: 4px;
  }
  &::after {
    width: 2px;
    height: 24px;
    border-top: 9px solid;
    border-bottom: 9px solid;
    left: 4px;
    top: -7px;
  }
`

export const Support = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSupport {...props} ref={ref} />
    </>
  )
})
