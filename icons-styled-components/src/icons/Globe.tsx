import React from 'react'
import styled from 'styled-components'

const StyledGlobe = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 10px;
    height: 10px;
    border: 2px solid;
    border-radius: 100px;
    margin-left: -3px;
    margin-top: -7px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    top: 11px;
    border-right: 2px solid transparent;
    box-shadow: 0 2px 0, inset -2px 0 0;
    left: 1px;
    width: 6px;
    height: 2px;
  }
  &::after {
    width: 16px;
    height: 10px;
    border-radius: 50px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border: 2px solid;
    border-top-color: transparent;
    right: -7px;
    bottom: -5px;
    transform: rotate(-35deg);
  }
`

export const Globe = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledGlobe {...props} ref={ref} />
    </>
  )
})
