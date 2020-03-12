import React from 'react'
import styled from 'styled-components'

const StyledPin = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: rotate(45deg) scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border-radius: 100% 100% 0 100%;
    box-shadow: inset 0 0 0 2px;
    margin-top: -4px;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 8px;
    border: 2px solid;
    top: 5px;
    left: 5px;
    border-radius: 40px;
  }
`

export const Pin = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPin {...props} ref={ref} />
    </>
  )
})
