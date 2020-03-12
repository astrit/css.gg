import React from 'react'
import styled from 'styled-components'

const StyledHeart = styled.i`
  &,
  &::after {
    border: 2px solid;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    width: 10px;
    height: 8px;
    border-bottom: 0;
  }
  & {
    box-sizing: border-box;
    position: relative;
    transform: translate(calc(-10px / 2 * var(--ggs, 1)), calc(-6px / 2 * var(--ggs, 1)))
      rotate(-45deg) scale(var(--ggs, 1));
    display: block;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::after {
    right: -9px;
    transform: rotate(90deg);
    top: 5px;
  }
  &::before {
    width: 11px;
    height: 11px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    left: -2px;
    top: 3px;
  }
`

export const Heart = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledHeart {...props} ref={ref} />
    </>
  )
})
