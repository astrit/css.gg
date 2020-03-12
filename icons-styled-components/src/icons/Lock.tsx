import React from 'react'
import styled from 'styled-components'

const StyledLock = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 12px;
    height: 11px;
    border: 2px solid;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom: transparent;
    margin-top: -12px;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 16px;
    height: 10px;
    border-radius: 2px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
    left: -4px;
    top: 9px;
  }
`

export const Lock = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledLock {...props} ref={ref} />
    </>
  )
})
