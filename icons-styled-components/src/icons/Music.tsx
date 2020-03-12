import React from 'react'
import styled from 'styled-components'

const StyledMusic = styled.i`
  &,
  &::after,
  &::before {
    display: block;
    box-sizing: border-box;
    border: 2px solid;
  }
  & {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: 0;
    margin-top: -4px;
    position: relative;
    transform: skewY(-15deg) scale(var(--ggs, 1));
    width: 14px;
    height: 16px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    top: 9px;
    left: -7px;
    transform: skewY(15deg);
    border-radius: 10px;
  }
  &::after {
    left: 5px;
  }
`

export const Music = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMusic {...props} ref={ref} />
    </>
  )
})
