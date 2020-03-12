import React from 'react'
import styled from 'styled-components'

const StyledProductHunt = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border: 2px solid;
    border-radius: 100px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    top: 3px;
  }
  &::before {
    border: 2px solid;
    border-left: 0;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    width: 6px;
    height: 6px;
    left: 5px;
  }
  &::after {
    width: 2px;
    height: 8px;
    background: currentColor;
    left: 4px;
  }
`

export const ProductHunt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledProductHunt {...props} ref={ref} />
    </>
  )
})
