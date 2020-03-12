import React from 'react'
import styled from 'styled-components'

const StyledMergeHorizontal = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 2px;
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
    transform: rotate(-45deg);
  }
  &::after {
    border-bottom: 2px solid;
    border-left: 2px solid;
    left: 4px;
    bottom: 5px;
  }
  &::before {
    border-top: 2px solid;
    border-right: 2px solid;
    right: 4px;
    top: 5px;
  }
`

export const MergeHorizontal = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMergeHorizontal {...props} ref={ref} />
    </>
  )
})
