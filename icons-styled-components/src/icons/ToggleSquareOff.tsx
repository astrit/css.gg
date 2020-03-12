import React from 'react'
import styled from 'styled-components'

const StyledToggleSquareOff = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 24px;
    height: 14px;
    border: 2px solid;
    border-radius: 2px;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    background: currentColor;
    top: 2px;
    left: 12px;
    border-radius: 1px;
  }
`

export const ToggleSquareOff = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledToggleSquareOff {...props} ref={ref} />
    </>
  )
})
