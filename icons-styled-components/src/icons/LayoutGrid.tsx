import React from 'react'
import styled from 'styled-components'

const StyledLayoutGrid = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 10px;
    height: 10px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    height: 4px;
    border-left: 4px solid;
    border-right: 4px solid;
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
`

export const LayoutGrid = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledLayoutGrid {...props} ref={ref} />
    </>
  )
})
