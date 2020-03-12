import React from 'react'
import styled from 'styled-components'

const StyledDanger = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 20px;
    border: 2px solid;
    border-radius: 40px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 2px;
    background: currentColor;
    left: 7px;
  }
  &::after {
    top: 2px;
    height: 8px;
  }
  &::before {
    height: 2px;
    bottom: 2px;
  }
`

export const Danger = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDanger {...props} ref={ref} />
    </>
  )
})
