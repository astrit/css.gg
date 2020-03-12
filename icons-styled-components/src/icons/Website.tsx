import React from 'react'
import styled from 'styled-components'

const StyledWebsite = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 18px;
    border: 2px solid;
    border-radius: 3px;
    box-shadow: 0 -1px 0;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    top: 2px;
  }
  &::before {
    background: currentColor;
    left: 2px;
    box-shadow: 0 4px 0, 0 8px 0;
    border-radius: 3px;
    height: 2px;
  }
  &::after {
    height: 10px;
    border: 2px solid;
    right: 2px;
    border-radius: 1px;
  }
`

export const Website = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledWebsite {...props} ref={ref} />
    </>
  )
})
