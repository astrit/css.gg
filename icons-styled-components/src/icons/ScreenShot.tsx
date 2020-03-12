import React from 'react'
import styled from 'styled-components'

const StyledScreenShot = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 20px;
    border: 2px solid;
    border-radius: 1px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 4px;
    height: 4px;
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

export const ScreenShot = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledScreenShot {...props} ref={ref} />
    </>
  )
})
