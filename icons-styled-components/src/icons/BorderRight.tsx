import React from 'react'
import styled from 'styled-components'

const StyledBorderRight = styled.i`
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
    border-right: 3px solid;
  }
  &::before {
    content: '';
    position: absolute;
    width: 10px;
    border: 3px solid;
    border-right: 0;
    bottom: 0;
    right: 2px;
    opacity: 0.3;
  }
`

export const BorderRight = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBorderRight {...props} ref={ref} />
    </>
  )
})
