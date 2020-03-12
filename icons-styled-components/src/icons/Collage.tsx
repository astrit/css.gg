import React from 'react'
import styled from 'styled-components'

const StyledCollage = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 20px;
    border: 2px solid;
    border-radius: 3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 2px;
    height: 20px;
    background: currentColor;
    left: 5px;
    top: -2px;
  }
  &::after {
    width: 9px;
    height: 2px;
    left: -2px;
    top: 4px;
    box-shadow: 7px 5px 0 0;
  }
`

export const Collage = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCollage {...props} ref={ref} />
    </>
  )
})
