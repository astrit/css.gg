import React from 'react'
import styled from 'styled-components'

const StyledQuote = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 18px;
    border: 2px solid transparent;
    border-radius: 2px;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 6px;
    border-left: 3px solid;
    border-right: 3px solid;
    left: 4px;
    top: 4px;
    transform: skewX(-20deg);
  }
`

export const Quote = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledQuote {...props} ref={ref} />
    </>
  )
})
