import React from 'react'
import styled from 'styled-components'

const StyledDisplayFullwidth = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    height: 14px;
    width: 16px;
    box-shadow: inset 0 0 0 2px, 0 2px 0 0, 0 -2px 0 0;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
  }
`

export const DisplayFullwidth = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDisplayFullwidth {...props} ref={ref} />
    </>
  )
})
