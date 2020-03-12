import React from 'react'
import styled from 'styled-components'

const StyledGhost = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 16px;
    background: linear-gradient(to left, currentColor 40px, transparent 0) no-repeat -6px center/40px
      4px;
    overflow: hidden;
  }
  &::after,
  &::before {
    content: '';
    background: currentColor;
    box-sizing: border-box;
    position: absolute;
    display: block;
    height: 4px;
    width: 12px;
    box-shadow: 14px 0 0;
  }
  &::after {
    width: 20px;
    left: -12px;
    box-shadow: 22px 0 0;
    bottom: 0;
  }
`

export const Ghost = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledGhost {...props} ref={ref} />
    </>
  )
})
