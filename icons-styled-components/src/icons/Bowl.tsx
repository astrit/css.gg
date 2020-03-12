import React from 'react'
import styled from 'styled-components'

const StyledBowl = styled.i`
  & {
    display: block;
    position: relative;
    transform: scale(var(--ggs, 1));
    box-sizing: border-box;
    width: 20px;
    height: 18px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    width: 20px;
    height: 12px;
    border: 2px solid;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    bottom: 0;
  }
  &::after {
    background: currentColor;
    width: 2px;
    height: 10px;
    border-radius: 4px;
    transform: rotate(45deg);
    right: 4px;
    top: -1px;
  }
`

export const Bowl = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBowl {...props} ref={ref} />
    </>
  )
})
