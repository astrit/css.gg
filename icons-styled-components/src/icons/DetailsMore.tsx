import React from 'react'
import styled from 'styled-components'

const StyledDetailsMore = styled.i`
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
    box-shadow: 0 4px 0 0;
    top: 0;
    width: 16px;
  }
  &::after {
    width: 10px;
    bottom: 0;
  }
`

export const DetailsMore = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDetailsMore {...props} ref={ref} />
    </>
  )
})
