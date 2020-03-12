import React from 'react'
import styled from 'styled-components'

const StyledDirectory = styled.i`
  & {
    background: linear-gradient(to left, currentColor 5px, transparent 0) no-repeat 2px 2px/4px 2px,
      linear-gradient(to left, currentColor 5px, transparent 0) no-repeat 2px 6px/4px 2px,
      linear-gradient(to left, currentColor 5px, transparent 0) no-repeat 2px 10px/4px 2px;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 18px;
    box-sizing: border-box;
    border-radius: 3px;
    border: 2px solid;
    position: relative;
    margin-left: -2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border: 2px solid;
  }
  &::before {
    top: 2px;
    border-radius: 100px;
    right: 4px;
    width: 5px;
    height: 5px;
  }
  &::after {
    width: 9px;
    height: 4px;
    border-radius: 150px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 0;
    right: 2px;
    bottom: 2px;
  }
`

export const Directory = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDirectory {...props} ref={ref} />
    </>
  )
})
