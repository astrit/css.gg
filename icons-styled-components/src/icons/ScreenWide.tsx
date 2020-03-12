import React from 'react'
import styled from 'styled-components'

const StyledScreenWide = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 24px;
    height: 11px;
    border: 2px solid;
    border-radius: 3px;
    margin-top: -4px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 8px;
    height: 2px;
    background: currentColor;
    top: 10px;
    left: 6px;
  }
  &::before {
    width: 2px;
    height: 4px;
    top: 8px;
    left: 9px;
  }
`

export const ScreenWide = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledScreenWide {...props} ref={ref} />
    </>
  )
})
