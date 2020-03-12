import React from 'react'
import styled from 'styled-components'

const StyledWorkAlt = styled.i`
  &,
  &::after {
    display: block;
    box-sizing: border-box;
    box-shadow: 0 0 0 2px;
  }
  & {
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 10px;
    border-radius: 1px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 1px;
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
    left: 4px;
    top: -3px;
  }
`

export const WorkAlt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledWorkAlt {...props} ref={ref} />
    </>
  )
})
