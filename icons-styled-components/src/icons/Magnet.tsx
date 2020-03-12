import React from 'react'
import styled from 'styled-components'

const StyledMagnet = styled.i`
  &,
  &::before {
    display: block;
    box-sizing: border-box;
    width: 14px;
  }
  & {
    border: 4px solid;
    transform: scale(var(--ggs, 1));
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    border-top: 0;
    position: relative;
    height: 12px;
  }
  &::before {
    content: '';
    position: absolute;
    height: 3px;
    border-left: 4px solid;
    border-right: 4px solid;
    top: -5px;
    left: -4px;
    opacity: 0.5;
  }
`

export const Magnet = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMagnet {...props} ref={ref} />
    </>
  )
})
