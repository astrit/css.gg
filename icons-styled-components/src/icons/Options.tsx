import React from 'react'
import styled from 'styled-components'

const StyledOptions = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 10px;
    height: 2px;
    box-shadow: -3px 4px 0 0, 3px -4px 0 0;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 8px;
    border: 2px solid;
    border-radius: 100%;
  }
  &::before {
    top: -7px;
    left: -4px;
  }
  &::after {
    bottom: -7px;
    right: -4px;
  }
`

export const Options = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledOptions {...props} ref={ref} />
    </>
  )
})
