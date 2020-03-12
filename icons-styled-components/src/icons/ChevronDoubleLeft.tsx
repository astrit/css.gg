import React from 'react'
import styled from 'styled-components'

const StyledChevronDoubleLeft = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 8px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    transform: rotate(45deg);
    top: 7px;
    left: 6px;
  }
  &::after {
    left: 11px;
  }
`

export const ChevronDoubleLeft = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledChevronDoubleLeft {...props} ref={ref} />
    </>
  )
})
