import React from 'react'
import styled from 'styled-components'

const StyledAnchor = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 2px;
    height: 14px;
    background: currentColor;
    border-radius: 8px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 6px;
    border: 2px solid;
  }
  &::after {
    width: 12px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-color: transparent;
    left: -5px;
    bottom: 2px;
  }
  &::before {
    width: 6px;
    border-radius: 8px;
    top: -4px;
    left: -2px;
  }
`

export const Anchor = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledAnchor {...props} ref={ref} />
    </>
  )
})
