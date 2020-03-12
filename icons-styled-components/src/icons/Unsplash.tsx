import React from 'react'
import styled from 'styled-components'

const StyledUnsplash = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 15px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    width: 16px;
    height: 9px;
    border: 5px solid;
    border-top: 0;
    bottom: 0;
  }
  &::after {
    width: 6px;
    height: 4px;
    background: currentColor;
    top: 0;
    left: 5px;
  }
`

export const Unsplash = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledUnsplash {...props} ref={ref} />
    </>
  )
})
