import React from 'react'
import styled from 'styled-components'

const StyledWindows = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::before {
    display: block;
    position: relative;
    box-sizing: border-box;
    width: 17px;
    height: 15px;
  }
  &::before {
    content: '';
    position: absolute;
    width: 7px;
    height: 6px;
    background: currentColor;
    box-shadow: 8px 0 0, 8px 7px 0, 0 7px 0;
    transform: perspective(30px) rotateY(-30deg);
  }
`

export const Windows = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledWindows {...props} ref={ref} />
    </>
  )
})
