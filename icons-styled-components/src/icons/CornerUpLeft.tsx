import React from 'react'
import styled from 'styled-components'

const StyledCornerUpLeft = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 3px;
  }
  &::after {
    width: 8px;
    height: 8px;
    border-bottom: 2px solid;
    border-left: 2px solid;
    transform: rotate(45deg);
    top: 3px;
  }
  &::before {
    width: 16px;
    height: 12px;
    border-top-right-radius: 4px;
    border-top: 2px solid;
    border-right: 2px solid;
    top: 6px;
  }
`

export const CornerUpLeft = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCornerUpLeft {...props} ref={ref} />
    </>
  )
})
