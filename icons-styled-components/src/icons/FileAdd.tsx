import React from 'react'
import styled from 'styled-components'

const StyledFileAdd = styled.i`
  & {
    background: linear-gradient(to bottom, currentColor 5px, transparent 0) no-repeat 2px 9px/6px
      2px;
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 16px;
    border: 2px solid transparent;
    border-right: 0;
    border-top: 0;
    box-shadow: 0 0 0 2px;
    border-radius: 1px;
    border-top-right-radius: 4px;
    overflow: hidden;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 6px;
  }
  &::before {
    background: currentColor;
    left: 4px;
    width: 2px;
    top: 7px;
  }
  &::after {
    width: 6px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    right: -1px;
    top: -1px;
  }
`

export const FileAdd = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFileAdd {...props} ref={ref} />
    </>
  )
})
