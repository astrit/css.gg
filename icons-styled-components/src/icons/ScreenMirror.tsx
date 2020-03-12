import React from 'react'
import styled from 'styled-components'

const StyledScreenMirror = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 10px;
    border: 2px solid;
    border-bottom: 0;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::after {
    border-bottom: 5px solid;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    bottom: -2px;
    left: 3px;
  }
  &::before {
    width: 18px;
    height: 2px;
    left: -2px;
    bottom: 0;
    border-left: 5px solid;
    border-right: 5px solid;
  }
`

export const ScreenMirror = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledScreenMirror {...props} ref={ref} />
    </>
  )
})
