import React from 'react'
import styled from 'styled-components'

const StyledComment = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 16px;
    border: 2px solid;
    border-bottom: 0;
    box-shadow: -6px 8px 0 -6px, 6px 8px 0 -6px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
  }
  &::before {
    border: 2px solid;
    border-top-color: transparent;
    border-bottom-left-radius: 20px;
    right: 4px;
    bottom: -6px;
    height: 6px;
  }
  &::after {
    height: 2px;
    background: currentColor;
    box-shadow: 0 4px 0 0;
    left: 4px;
    top: 4px;
  }
`

export const Comment = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledComment {...props} ref={ref} />
    </>
  )
})
