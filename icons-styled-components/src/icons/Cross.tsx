import React from 'react'
import styled from 'styled-components'

const StyledCross = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 10px;
    height: 2px;
    border-radius: 3px;
    background: currentColor;
  }
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 12px;
    top: -4px;
    left: 4px;
  }
`

export const Cross = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCross {...props} ref={ref} />
    </>
  )
})
