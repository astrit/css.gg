import React from 'react'
import styled from 'styled-components'

const StyledKey = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 6px;
    height: 8px;
    border: 2px solid;
    border-radius: 100px;
    margin-left: -12px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    right: -12px;
  }
  &::before {
    background: currentColor;
    width: 12px;
    height: 2px;
    top: 1px;
  }
  &::after {
    width: 5px;
    height: 3px;
    top: 2px;
    border-left: 2px solid;
    border-right: 2px solid;
  }
`

export const Key = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledKey {...props} ref={ref} />
    </>
  )
})
