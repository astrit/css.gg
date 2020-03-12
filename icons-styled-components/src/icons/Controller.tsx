import React from 'react'
import styled from 'styled-components'

const StyledController = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 8px;
    height: 8px;
    border: 2px solid;
    border-radius: 100px;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 14px;
    height: 14px;
    box-shadow: -6px -6px 0 -4px, 6px 6px 0 -4px, 6px -6px 0 -4px, -6px 6px 0 -4px;
    left: -5px;
    top: -5px;
    transform: rotate(45deg);
  }
`

export const Controller = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledController {...props} ref={ref} />
    </>
  )
})
