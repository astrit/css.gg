import React from 'react'
import styled from 'styled-components'

const StyledMoreVerticalAlt = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 4px;
    height: 4px;
    background: currentColor;
    border-radius: 100%;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
  }
  &::after {
    left: 0;
    top: 6px;
  }
  &::before {
    top: -6px;
    right: 0;
  }
`

export const MoreVerticalAlt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMoreVerticalAlt {...props} ref={ref} />
    </>
  )
})
