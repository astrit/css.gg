import React from 'react'
import styled from 'styled-components'

const StyledMaximizeAlt = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 14px;
    box-shadow: -6px -6px 0 -4px, 6px 6px 0 -4px, 6px -6px 0 -4px, -6px 6px 0 -4px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 22px;
    height: 2px;
    border-left: 8px solid;
    border-right: 8px solid;
    transform: rotate(-45deg);
    bottom: 6px;
    left: -4px;
  }
  &::before {
    transform: rotate(45deg);
  }
`

export const MaximizeAlt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMaximizeAlt {...props} ref={ref} />
    </>
  )
})
