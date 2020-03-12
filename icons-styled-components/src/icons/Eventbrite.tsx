import React from 'react'
import styled from 'styled-components'

const StyledEventbrite = styled.i`
  & {
    display: block;
    position: relative;
    box-sizing: border-box;
    transform: rotate(-25deg) scale(var(--ggs, 1));
    width: 20px;
    height: 20px;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 18px;
    height: 11px;
    border: 4px solid;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 18px;
    height: 18px;
    border: 4px solid;
    border-top-color: transparent;
    border-right-color: transparent;
    border-radius: 20px;
  }
`

export const Eventbrite = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledEventbrite {...props} ref={ref} />
    </>
  )
})
