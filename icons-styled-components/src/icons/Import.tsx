import React from 'react'
import styled from 'styled-components'

const StyledImport = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 14px;
    border: 2px solid;
    border-top: 0;
    box-shadow: -6px -8px 0 -6px, 6px -8px 0 -6px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    background: currentColor;
    width: 2px;
    height: 14px;
    right: 6px;
    bottom: 5px;
  }
  &::after {
    width: 6px;
    height: 6px;
    border-right: 2px solid;
    border-bottom: 2px solid;
    right: 4px;
    bottom: 4px;
    transform: rotate(45deg);
  }
`

export const Import = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledImport {...props} ref={ref} />
    </>
  )
})
