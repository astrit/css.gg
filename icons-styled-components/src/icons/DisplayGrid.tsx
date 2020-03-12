import React from 'react'
import styled from 'styled-components'

const StyledDisplayGrid = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    height: 14px;
    width: 14px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 4px;
    border-right: 4px solid;
    border-left: 4px solid;
    top: 0;
    left: 0;
  }
  &::before {
    top: 6px;
  }
`

export const DisplayGrid = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDisplayGrid {...props} ref={ref} />
    </>
  )
})
