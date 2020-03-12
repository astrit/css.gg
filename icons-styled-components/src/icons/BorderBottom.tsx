import React from 'react'
import styled from 'styled-components'

const StyledBorderBottom = styled.i`
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
    border-bottom: 3px solid;
  }
  &::before {
    content: '';
    position: absolute;
    height: 10px;
    border: 3px solid;
    border-bottom: 0;
    bottom: 2px;
    left: 0;
    opacity: 0.3;
  }
`

export const BorderBottom = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBorderBottom {...props} ref={ref} />
    </>
  )
})
