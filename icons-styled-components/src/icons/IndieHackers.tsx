import React from 'react'
import styled from 'styled-components'

const StyledIndieHackers = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 12px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    box-sizing: border-box;
    display: block;
    height: 12px;
  }
  &::before {
    width: 3px;
    background: currentColor;
  }
  &::after {
    width: 10px;
    right: 0;
    border-left: 3px solid;
    border-right: 3px solid;
    background: linear-gradient(to left, currentColor 14px, transparent 0) no-repeat 0 center/14px
      3px;
  }
`

export const IndieHackers = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledIndieHackers {...props} ref={ref} />
    </>
  )
})
