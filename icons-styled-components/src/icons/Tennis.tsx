import React from 'react'
import styled from 'styled-components'

const StyledTennis = styled.i`
  &,
  &::after,
  &::before {
    display: block;
    box-sizing: border-box;
    border: 2px solid;
    width: 20px;
    height: 20px;
    border-radius: 20px;
  }
  & {
    position: relative;
    transform: scale(var(--ggs, 1));
    overflow: hidden;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
  }
  &::before {
    left: -11px;
    top: -11px;
  }
  &::after {
    right: -11px;
    bottom: -11px;
  }
`

export const Tennis = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTennis {...props} ref={ref} />
    </>
  )
})
