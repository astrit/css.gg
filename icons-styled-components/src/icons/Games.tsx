import React from 'react'
import styled from 'styled-components'

const StyledGames = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 24px;
    height: 12px;
    border: 3px solid transparent;
    border-left: 6px solid transparent;
    box-shadow: 0 0 0 2px, inset 2px 0 0;
    border-radius: 40px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 2px;
    background: currentColor;
  }
  &::before {
    left: -2px;
    width: 6px;
    top: 2px;
  }
  &::after {
    border-radius: 3px;
    width: 2px;
    box-shadow: 0 4px 0, -2px 2px 0, 2px 2px 0;
    top: 0;
    right: 2px;
  }
`

export const Games = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledGames {...props} ref={ref} />
    </>
  )
})
