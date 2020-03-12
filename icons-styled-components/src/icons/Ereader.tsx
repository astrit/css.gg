import React from 'react'
import styled from 'styled-components'

const StyledEreader = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 24px;
    height: 18px;
    border: 2px solid;
    border-radius: 3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 2px;
    height: 18px;
    right: 9px;
    top: -2px;
    background: currentColor;
  }
  &::after {
    width: 5px;
    height: 2px;
    box-shadow: 0 4px 0, 0 8px 0;
    top: 2px;
    right: 2px;
  }
`

export const Ereader = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledEreader {...props} ref={ref} />
    </>
  )
})
