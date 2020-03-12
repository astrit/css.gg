import React from 'react'
import styled from 'styled-components'

const StyledPushChevronLeft = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 100px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 2px;
    height: 14px;
    border-left: 2px solid;
    top: 2px;
    left: 0;
  }
  &::after {
    width: 10px;
    height: 10px;
    border-bottom: 2px solid;
    transform: rotate(45deg);
    left: 6px;
    top: 4px;
  }
`

export const PushChevronLeft = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPushChevronLeft {...props} ref={ref} />
    </>
  )
})
