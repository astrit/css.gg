import React from 'react'
import styled from 'styled-components'

const StyledToggleOff = styled.i`
  &,
  &::before {
    display: block;
    box-sizing: border-box;
    border-radius: 20px;
  }
  & {
    border: 2px solid;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 24px;
    height: 14px;
  }
  &::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: currentColor;
    top: 2px;
    left: 12px;
  }
`

export const ToggleOff = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledToggleOff {...props} ref={ref} />
    </>
  )
})
