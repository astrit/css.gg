import React from 'react'
import styled from 'styled-components'

const StyledMouse = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 24px;
    border: 2px solid;
    border-radius: 10px;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 2px;
    height: 6px;
    background: currentColor;
    top: 3px;
    left: 5px;
  }
`

export const Mouse = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMouse {...props} ref={ref} />
    </>
  )
})
