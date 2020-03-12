import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 8px;
    left: 7px;
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

export const Select = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSelect {...props} ref={ref} />
    </>
  )
})
