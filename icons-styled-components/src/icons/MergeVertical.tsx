import React from 'react'
import styled from 'styled-components'

const StyledMergeVertical = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 2px;
    height: 14px;
    border-radius: 3px;
    background: currentColor;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    border-bottom: 2px solid;
    top: 4px;
  }
  &::after {
    border-left: 2px solid;
    left: 5px;
    transform: rotate(45deg);
  }
  &::before {
    border-right: 2px solid;
    transform: rotate(-45deg);
    right: 5px;
  }
`

export const MergeVertical = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMergeVertical {...props} ref={ref} />
    </>
  )
})
