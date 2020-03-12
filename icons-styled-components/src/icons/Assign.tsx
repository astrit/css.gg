import React from 'react'
import styled from 'styled-components'

const StyledAssign = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 6px;
    height: 6px;
    background: currentColor;
    transform: scale(var(--ggs, 1));
    border-radius: 100px;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 12px;
    height: 12px;
    box-shadow: -5px -5px 0 -3px, 5px 5px 0 -3px, 5px -5px 0 -3px, -5px 5px 0 -3px;
    left: -3px;
    top: -3px;
  }
`

export const Assign = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledAssign {...props} ref={ref} />
    </>
  )
})
