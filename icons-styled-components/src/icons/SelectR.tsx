import React from 'react'
import styled from 'styled-components'

const StyledSelectR = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border: 2px solid;
    border-radius: 4px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    left: 6px;
    transform: rotate(-45deg);
  }
  &::before {
    border-left: 2px solid;
    border-bottom: 2px solid;
    bottom: 4px;
  }
  &::after {
    border-right: 2px solid;
    border-top: 2px solid;
    top: 4px;
  }
`

export const SelectR = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSelectR {...props} ref={ref} />
    </>
  )
})
