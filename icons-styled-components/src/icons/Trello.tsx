import React from 'react'
import styled from 'styled-components'

const StyledTrello = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 20px;
    border: 2px solid;
    border-radius: 2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 5px;
    background: currentColor;
    border-radius: 1px;
    top: 2px;
  }
  &::before {
    left: 2px;
    height: 12px;
  }
  &::after {
    height: 8px;
    right: 2px;
  }
`

export const Trello = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTrello {...props} ref={ref} />
    </>
  )
})
