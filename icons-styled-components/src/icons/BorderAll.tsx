import React from 'react'
import styled from 'styled-components'

const StyledBorderAll = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 14px;
    height: 14px;
  }
  &::before {
    content: '';
    position: absolute;
    border: 3px solid;
    bottom: 0;
    left: 0;
  }
`

export const BorderAll = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBorderAll {...props} ref={ref} />
    </>
  )
})
