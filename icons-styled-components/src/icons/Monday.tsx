import React from 'react'
import styled from 'styled-components'

const StyledMonday = styled.i`
  & {
    display: block;
    box-sizing: border-box;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 21px;
    height: 16px;
  }
  &::after,
  &::before {
    background: currentColor;
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    border-radius: 22px;
  }
  &::before {
    height: 16px;
    transform: rotate(35deg);
    box-shadow: 7px -5px 0 0;
  }
  &::after {
    height: 6px;
    bottom: 1px;
    right: 0;
  }
`

export const Monday = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMonday {...props} ref={ref} />
    </>
  )
})
