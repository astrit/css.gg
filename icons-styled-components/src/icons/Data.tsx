import React from 'react'
import styled from 'styled-components'

const StyledData = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    border: 2px solid;
    border-radius: 50%;
    width: 14px;
    height: 14px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    top: 2px;
    left: 2px;
  }
  &::after {
    background: linear-gradient(to left, currentColor 8px, transparent 0) no-repeat bottom
      center/2px 8px;
    width: 22px;
    height: 22px;
    top: -6px;
    left: -6px;
  }
  &,
  &::after {
    border-top-color: transparent;
    border-bottom-color: transparent;
  }
`

export const Data = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledData {...props} ref={ref} />
    </>
  )
})
