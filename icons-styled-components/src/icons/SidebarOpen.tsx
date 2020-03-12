import React from 'react'
import styled from 'styled-components'

const StyledSidebarOpen = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 16px;
    border: 2px solid;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 4px;
    height: 12px;
    background: currentColor;
    top: 0;
    left: 0;
  }
`

export const SidebarOpen = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSidebarOpen {...props} ref={ref} />
    </>
  )
})
