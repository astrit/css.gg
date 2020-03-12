import React from 'react'
import styled from 'styled-components'

const StyledDetailsLess = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 14px;
    border: 2px solid transparent;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 2px;
    border-radius: 3px;
    background: currentColor;
  }
  &::before {
    top: 2px;
    width: 16px;
  }
  &::after {
    width: 10px;
    bottom: 2px;
  }
`

export const DetailsLess = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDetailsLess {...props} ref={ref} />
    </>
  )
})
