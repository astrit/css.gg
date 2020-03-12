import React from 'react'
import styled from 'styled-components'

const StyledRuler = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 24px;
    height: 13px;
    border: 2px solid;
    border-radius: 3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 2px;
    height: 5px;
    background: currentColor;
    left: 7px;
    top: -1px;
    box-shadow: 8px 0 0;
  }
  &::before {
    height: 7px;
    left: 3px;
  }
`

export const Ruler = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledRuler {...props} ref={ref} />
    </>
  )
})
