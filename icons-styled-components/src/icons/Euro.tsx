import React from 'react'
import styled from 'styled-components'

const StyledEuro = styled.i`
  & {
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 14px;
    border: 2px solid;
    box-sizing: border-box;
    border-radius: 100px;
    border-right-color: transparent;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 9px;
    height: 5px;
    border-top: 2px solid;
    border-bottom: 2px solid;
    transform: skewX(-20deg);
    left: -4px;
    top: 3px;
  }
`

export const Euro = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledEuro {...props} ref={ref} />
    </>
  )
})
