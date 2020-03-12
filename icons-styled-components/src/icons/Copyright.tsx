import React from 'react'
import styled from 'styled-components'

const StyledCopyright = styled.i`
  &,
  &::after {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border: 2px solid;
    border-radius: 40px;
  }
  &::after {
    content: '';
    position: absolute;
    border-right-color: transparent;
    width: 8px;
    height: 8px;
    top: 3px;
    left: 3px;
    transform: none;
  }
`

export const Copyright = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCopyright {...props} ref={ref} />
    </>
  )
})
