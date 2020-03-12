import React from 'react'
import styled from 'styled-components'

const StyledDisplayFlex = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    height: 14px;
    width: 16px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px, inset -2px 0 0 0, inset 2px 0 0 0;
  }
`

export const DisplayFlex = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDisplayFlex {...props} ref={ref} />
    </>
  )
})
