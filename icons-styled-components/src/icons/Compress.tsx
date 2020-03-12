import React from 'react'
import styled from 'styled-components'

const StyledCompress = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 26px;
    height: 2px;
    border-left: 10px solid;
    border-right: 10px solid;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    border-top: 2px solid;
    top: -2px;
  }
  &::before {
    border-right: 2px solid;
    left: -5px;
    transform: rotate(45deg);
  }
  &::after {
    border-left: 2px solid;
    right: -5px;
    transform: rotate(-45deg);
  }
`

export const Compress = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCompress {...props} ref={ref} />
    </>
  )
})
