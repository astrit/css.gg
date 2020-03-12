import React from 'react'
import styled from 'styled-components'

const StyledShutterstock = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 20px;
    border: 2px solid;
    border-radius: 3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 1px;
  }
  &::before {
    border-bottom: 2px solid;
    border-right: 2px solid;
    bottom: 2px;
    right: 2px;
  }
  &::after {
    border-top: 2px solid;
    border-left: 2px solid;
    top: 2px;
    left: 2px;
  }
`

export const Shutterstock = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledShutterstock {...props} ref={ref} />
    </>
  )
})
