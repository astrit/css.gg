import React from 'react'
import styled from 'styled-components'

const StyledDigitalocean = styled.i`
  & {
    position: relative;
    display: block;
    transform: rotate(45deg) scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border: 5px solid;
    box-sizing: border-box;
    border-radius: 100px;
    border-bottom-color: transparent;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    background: currentColor;
    transform: rotate(-45deg);
  }
  &::after {
    box-shadow: -4px 4px 0 -1px;
    width: 5px;
    height: 5px;
    right: 2px;
    bottom: 0;
  }
  &::before {
    width: 2px;
    height: 2px;
    right: 7px;
    bottom: -5px;
  }
`

export const Digitalocean = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDigitalocean {...props} ref={ref} />
    </>
  )
})
