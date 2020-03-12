import React from 'react'
import styled from 'styled-components'

const StyledSweden = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 21px;
    height: 16px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 6px;
    background: currentColor;
    box-shadow: 0 8px 0;
    top: 0;
  }
  &::before {
    left: 0;
    width: 7px;
  }
  &::after {
    width: 12px;
    right: 0;
  }
`

export const Sweden = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSweden {...props} ref={ref} />
    </>
  )
})
