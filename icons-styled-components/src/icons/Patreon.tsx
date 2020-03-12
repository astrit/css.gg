import React from 'react'
import styled from 'styled-components'

const StyledPatreon = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 4px;
    height: 16px;
    background: currentColor;
    left: -6px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    opacity: 0.5;
    border-radius: 100px;
    left: 6px;
  }
`

export const Patreon = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPatreon {...props} ref={ref} />
    </>
  )
})
