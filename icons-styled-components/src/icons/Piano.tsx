import React from 'react'
import styled from 'styled-components'

const StyledPiano = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 23px;
    height: 18px;
    border: 2px solid;
    border-radius: 2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 10px;
    background: currentColor;
    box-shadow: 5px 0 0, 10px 0 0;
  }
  &::before {
    top: -2px;
    width: 3px;
    left: 3px;
  }
  &::after {
    width: 1px;
    bottom: -2px;
    left: 4px;
  }
`

export const Piano = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPiano {...props} ref={ref} />
    </>
  )
})
