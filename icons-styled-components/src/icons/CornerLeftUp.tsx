import React from 'react'
import styled from 'styled-components'

const StyledCornerLeftUp = styled.i`
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
    left: 3px;
  }
  &::before {
    width: 12px;
    height: 16px;
    border-bottom-left-radius: 4px;
    border-bottom: 2px solid;
    border-left: 2px solid;
    left: 6px;
  }
`

export const CornerLeftUp = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCornerLeftUp {...props} ref={ref} />
    </>
  )
})
