import React from 'react'
import styled from 'styled-components'

const StyledShield = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 4px;
    background: currentColor;
    border-radius: 100px;
    margin-top: -6px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 8px;
    height: 16px;
    border: 2px solid;
  }
  &::before {
    border-bottom-left-radius: 40px;
    border-right: 0;
    left: 0;
  }
  &::after {
    border-bottom-right-radius: 40px;
    border-left: 0;
    right: 0;
  }
`

export const Shield = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledShield {...props} ref={ref} />
    </>
  )
})
