import React from 'react'
import styled from 'styled-components'

const StyledTrophy = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 10px;
    height: 12px;
    border: 2px solid;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    box-shadow: inset 0 0 0 2px, 0 2px 0 0;
    bottom: -4px;
    width: 6px;
    height: 4px;
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
    left: 0;
  }
  &::after {
    width: 16px;
    height: 6px;
    border-left: 2px solid;
    border-right: 2px solid;
    left: -5px;
    top: 0;
  }
`

export const Trophy = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTrophy {...props} ref={ref} />
    </>
  )
})
