import React from 'react'
import styled from 'styled-components'

const StyledPathOutline = styled.i`
  & {
    display: block;
    position: relative;
    box-sizing: border-box;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 14px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    display: block;
    box-sizing: border-box;
    border: 2px solid;
    width: 10px;
    height: 10px;
  }
  &::before {
    bottom: 0;
    right: 0;
  }
`

export const PathOutline = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPathOutline {...props} ref={ref} />
    </>
  )
})
