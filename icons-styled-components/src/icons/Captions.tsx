import React from 'react'
import styled from 'styled-components'

const StyledCaptions = styled.i`
  & {
    border-radius: 1px;
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 20px;
    height: 16px;
    border: 2px solid;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 8px;
    border-right: transparent;
    top: 2px;
    left: 2px;
  }
  &::before {
    left: 9px;
  }
`

export const Captions = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCaptions {...props} ref={ref} />
    </>
  )
})
