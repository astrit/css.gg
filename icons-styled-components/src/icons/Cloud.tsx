import React from 'react'
import styled from 'styled-components'

const StyledCloud = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 8px;
    height: 2px;
    background: currentColor;
    margin-bottom: -20px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    border: 2px solid;
    box-sizing: border-box;
    bottom: 0;
  }
  &::before {
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    border-right: 0;
    left: -6px;
    width: 7px;
    height: 12px;
  }
  &::after {
    width: 16px;
    height: 16px;
    border-radius: 100px;
    border-left-color: transparent;
    right: -8px;
    transform: rotate(-45deg);
  }
`

export const Cloud = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCloud {...props} ref={ref} />
    </>
  )
})
