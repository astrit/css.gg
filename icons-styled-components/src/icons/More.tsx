import React from 'react'
import styled from 'styled-components'

const StyledMore = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 6px;
    height: 6px;
    border: 2px solid;
    border-radius: 100%;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    top: -2px;
  }
  &::after {
    left: -9px;
  }
  &::before {
    right: -9px;
  }
`

export const More = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMore {...props} ref={ref} />
    </>
  )
})
