import React from 'react'
import styled from 'styled-components'

const StyledSidebar = styled.i`
  &,
  &::before {
    display: block;
    box-sizing: border-box;
    height: 16px;
  }
  & {
    border-left: 2px solid;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 18px;
  }
  &::before {
    content: '';
    position: absolute;
    width: 14px;
    border: 2px solid;
    top: 0;
    left: 2px;
  }
`

export const Sidebar = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSidebar {...props} ref={ref} />
    </>
  )
})
