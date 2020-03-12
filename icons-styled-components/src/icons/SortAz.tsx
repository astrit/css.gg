import React from 'react'
import styled from 'styled-components'

const StyledSortAz = styled.i`
  &,
  &::after,
  &::before {
    display: block;
    box-sizing: border-box;
    height: 2px;
    border-radius: 4px;
    background: currentColor;
  }
  & {
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 8px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
  }
  &::before {
    width: 12px;
    top: -4px;
    left: -2px;
  }
  &::after {
    width: 4px;
    top: 4px;
    left: 2px;
  }
`

export const SortAz = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSortAz {...props} ref={ref} />
    </>
  )
})
