import React from 'react'
import styled from 'styled-components'

const StyledList = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 20px;
    border: 2px solid;
    border-radius: 3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 2px;
    height: 2px;
    background: currentColor;
    top: 3px;
    left: 3px;
    box-shadow: 0 4px 0, 0 8px 0;
  }
  &::after {
    border-radius: 3px;
    width: 8px;
    left: 7px;
  }
`

export const List = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledList {...props} ref={ref} />
    </>
  )
})
