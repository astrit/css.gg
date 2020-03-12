import React from 'react'
import styled from 'styled-components'

const StyledDesktop = styled.i`
  & {
    display: block;
    position: relative;
    box-sizing: border-box;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 18px;
    border: 2px solid;
    border-radius: 3px;
    overflow: hidden;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
    width: 22px;
    height: 2px;
    background: currentColor;
    top: 2px;
    left: -2px;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
    background: currentColor;
    width: 2px;
    height: 2px;
    border-radius: 4px;
    bottom: 2px;
    left: 4px;
    box-shadow: 4px 0 0, 8px 0 0;
  }
`

export const Desktop = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDesktop {...props} ref={ref} />
    </>
  )
})
