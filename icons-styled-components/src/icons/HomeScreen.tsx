import React from 'react'
import styled from 'styled-components'

const StyledHomeScreen = styled.i`
  & {
    display: block;
    position: relative;
    box-sizing: border-box;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 22px;
    border-radius: 3px;
    border: 2px solid;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
    border-radius: 2px;
    width: 2px;
    height: 2px;
    left: 1px;
    background: currentColor;
  }
  &::after {
    top: 1px;
    box-shadow: 3px 0, 6px 0, 0 3px, 3px 3px, 6px 3px, 0 6px;
  }
  &::before {
    bottom: 1px;
    box-shadow: 3px 0 0, 6px 0 0;
  }
`

export const HomeScreen = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledHomeScreen {...props} ref={ref} />
    </>
  )
})
