import React from 'react'
import styled from 'styled-components'

const StyledSidebarRight = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 16px;
    border-right: 2px solid;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 14px;
    height: 16px;
    border: 2px solid;
    top: 0;
    right: 2px;
  }
`

export const SidebarRight = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSidebarRight {...props} ref={ref} />
    </>
  )
})
