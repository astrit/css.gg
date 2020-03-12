import React from 'react'
import styled from 'styled-components'

const StyledDarkMode = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    border: 2px solid;
    border-radius: 100px;
    width: 20px;
    height: 20px;
  }
  &::after,
  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    display: block;
  }
  &::before {
    border: 5px solid;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    border-right: 0;
    width: 9px;
    height: 18px;
    top: -1px;
    left: -1px;
  }
  &::after {
    border: 4px solid;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    border-left: 0;
    width: 4px;
    height: 8px;
    right: 4px;
    top: 4px;
  }
`

export const DarkMode = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDarkMode {...props} ref={ref} />
    </>
  )
})
