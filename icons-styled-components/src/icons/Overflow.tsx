import React from 'react'
import styled from 'styled-components'

const StyledOverflow = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 16px;
    border-radius: 20px;
    border-bottom: 8px solid;
  }
  &::after,
  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    display: block;
    border-radius: 20px;
  }
  &::before {
    width: 20px;
    height: 20px;
    border-bottom: 10px solid;
    opacity: 0.6;
    left: -2px;
    top: -2px;
  }
  &::after {
    width: 16px;
    height: 16px;
    border-top: 8px solid;
    opacity: 0.2;
    left: 0;
    top: 0;
  }
`

export const Overflow = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledOverflow {...props} ref={ref} />
    </>
  )
})
