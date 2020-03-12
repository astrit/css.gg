import React from 'react'
import styled from 'styled-components'

const StyledSmartphone = styled.i`
  & {
    background: linear-gradient(to left, currentColor 5px, transparent 0) no-repeat 4px 12px/2px 2px;
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 20px;
    border: 2px solid;
    border-radius: 2px;
  }
`

export const Smartphone = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSmartphone {...props} ref={ref} />
    </>
  )
})
