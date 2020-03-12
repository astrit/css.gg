import React from 'react'
import styled from 'styled-components'

const StyledBoard = styled.i`
  & {
    display: block;
    position: relative;
    box-sizing: border-box;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 12px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    box-shadow: 0 0 0 2px, inset 2px 0 0, inset -2px 0 0;
    border-radius: 2px;
  }
`

export const Board = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBoard {...props} ref={ref} />
    </>
  )
})
