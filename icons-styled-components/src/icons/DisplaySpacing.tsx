import React from 'react'
import styled from 'styled-components'

const StyledDisplaySpacing = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    height: 14px;
    width: 14px;
    box-shadow: inset 0 0 0 2px, 2px 0 0 0, -2px 0 0 0;
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
  }
`

export const DisplaySpacing = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDisplaySpacing {...props} ref={ref} />
    </>
  )
})
