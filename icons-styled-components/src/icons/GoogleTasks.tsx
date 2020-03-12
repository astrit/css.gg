import React from 'react'
import styled from 'styled-components'

const StyledGoogleTasks = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    display: block;
    background: currentColor;
  }
  &::before {
    width: 6px;
    height: 6px;
    border-radius: 10px;
    bottom: 6px;
    left: 2px;
  }
  &::after {
    height: 18px;
    width: 4px;
    border-radius: 20px;
    transform: rotate(40deg);
    right: 2px;
    bottom: 0;
  }
`

export const GoogleTasks = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledGoogleTasks {...props} ref={ref} />
    </>
  )
})
