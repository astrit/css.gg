import React from 'react'
import styled from 'styled-components'

const StyledBrowser = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 24px;
    height: 18px;
    border: 2px solid;
    border-radius: 3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 22px;
    height: 2px;
    background: currentColor;
    top: 4px;
  }
  &::after {
    border-radius: 3px;
    width: 2px;
    box-shadow: 3px 0 0, 6px 0 0;
    top: 1px;
    left: 1px;
  }
`

export const Browser = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBrowser {...props} ref={ref} />
    </>
  )
})
