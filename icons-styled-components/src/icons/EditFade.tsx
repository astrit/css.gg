import React from 'react'
import styled from 'styled-components'

const StyledEditFade = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
    border-radius: 100px;
    overflow: hidden;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 20px;
    left: -2px;
    background: currentColor;
    opacity: 0.6;
  }
  &::before {
    left: 6px;
    opacity: 0.1;
  }
`

export const EditFade = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledEditFade {...props} ref={ref} />
    </>
  )
})
