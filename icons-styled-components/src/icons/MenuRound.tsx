import React from 'react'
import styled from 'styled-components'

const StyledMenuRound = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border-radius: 24px;
    border: 2px solid;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 2px;
    background: currentColor;
    border-radius: 3px;
    top: 4px;
    left: 4px;
    box-shadow: 0 4px 0, 0 8px 0;
  }
`

export const MenuRound = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMenuRound {...props} ref={ref} />
    </>
  )
})
