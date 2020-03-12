import React from 'react'
import styled from 'styled-components'

const StyledSync = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    border-radius: 40px;
    border: 2px solid;
    margin: 1px;
    border-left-color: transparent;
    border-right-color: transparent;
    width: 18px;
    height: 18px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    transform: rotate(-45deg);
  }
  &::before {
    border-left: 6px solid;
    bottom: -1px;
    right: -3px;
  }
  &::after {
    border-right: 6px solid;
    top: -1px;
    left: -3px;
  }
`

export const Sync = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSync {...props} ref={ref} />
    </>
  )
})
