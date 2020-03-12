import React from 'react'
import styled from 'styled-components'

const StyledSmileNeutral = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 20px;
    border: 2px solid;
    border-radius: 100px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 2px;
    background: currentColor;
    left: 4px;
  }
  &::before {
    box-shadow: 6px 0 0;
    width: 2px;
    border-radius: 10px;
    top: 5px;
  }
  &::after {
    border-radius: 3px;
    width: 8px;
    top: 10px;
  }
`

export const SmileNeutral = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSmileNeutral {...props} ref={ref} />
    </>
  )
})
