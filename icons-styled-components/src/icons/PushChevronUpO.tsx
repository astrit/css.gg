import React from 'react'
import styled from 'styled-components'

const StyledPushChevronUpO = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border: 2px solid;
    border-radius: 100px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-top: 2px solid;
  }
  &::before {
    top: 5px;
    width: 8px;
    height: 2px;
    left: 5px;
  }
  &::after {
    width: 6px;
    height: 6px;
    border-right: 2px solid;
    transform: rotate(-45deg);
    left: 6px;
    bottom: 3px;
  }
`

export const PushChevronUpO = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPushChevronUpO {...props} ref={ref} />
    </>
  )
})
