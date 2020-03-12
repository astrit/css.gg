import React from 'react'
import styled from 'styled-components'

const StyledCornerRightUp = styled.i`
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
    top: 3px;
  }
  &::after {
    width: 8px;
    height: 8px;
    border-top: 2px solid;
    border-left: 2px solid;
    transform: rotate(45deg);
    right: 3px;
  }
  &::before {
    width: 12px;
    height: 16px;
    border-bottom-right-radius: 4px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    right: 6px;
  }
`

export const CornerRightUp = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCornerRightUp {...props} ref={ref} />
    </>
  )
})
