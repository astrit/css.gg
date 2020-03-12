import React from 'react'
import styled from 'styled-components'

const StyledCamera = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    border: 2px solid;
    border-radius: 3px;
    width: 18px;
    height: 12px;
    perspective: 24px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    border: 2px solid;
    border-left-color: transparent;
    transform: rotateY(-70deg);
    width: 8px;
    height: 8px;
    right: -7px;
    top: 0;
  }
  &::after {
    width: 10px;
    height: 5px;
    border-top: 2px solid;
    border-right: 2px solid;
    top: -5px;
    right: 2px;
    border-top-right-radius: 2px;
  }
`

export const Camera = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCamera {...props} ref={ref} />
    </>
  )
})
