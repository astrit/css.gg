import React from 'react'
import styled from 'styled-components'

const StyledMicrosoft = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 18px;
    height: 18px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 8px;
    border-top: 8px solid;
    border-bottom: 8px solid;
  }
  &::after {
    right: 0;
  }
`

export const Microsoft = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMicrosoft {...props} ref={ref} />
    </>
  )
})
