import React from 'react'
import styled from 'styled-components'

const StyledCopy = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 18px;
    border: 2px solid;
    margin-left: -5px;
    margin-top: -4px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    background: linear-gradient(to left, currentColor 5px, transparent 0) no-repeat right top/5px
        2px,
      linear-gradient(to left, currentColor 5px, transparent 0) no-repeat left bottom/ 2px 5px;
    box-shadow: inset -4px -4px 0 -2px;
    bottom: -6px;
    right: -6px;
    width: 14px;
    height: 18px;
  }
  &::after {
    width: 6px;
    height: 2px;
    background: currentColor;
    left: 2px;
    top: 2px;
    box-shadow: 0 4px 0, 0 8px 0;
  }
`

export const Copy = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCopy {...props} ref={ref} />
    </>
  )
})
