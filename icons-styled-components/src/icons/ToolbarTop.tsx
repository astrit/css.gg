import React from 'react'
import styled from 'styled-components'

const StyledToolbarTop = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 12px;
    box-shadow: 0 0 0 2px, inset 0 2px 0;
    border: 2px solid transparent;
    border-radius: 1px;
  }
`

export const ToolbarTop = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledToolbarTop {...props} ref={ref} />
    </>
  )
})
