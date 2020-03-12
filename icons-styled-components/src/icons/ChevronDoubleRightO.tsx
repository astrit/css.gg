import React from 'react'
import styled from 'styled-components'

const StyledChevronDoubleRightO = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    border: 2px solid;
    border-radius: 40px;
    width: 22px;
    height: 22px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    border-right: 2px solid;
    border-top: 2px solid;
    transform: rotate(45deg);
    top: 6px;
    right: 5px;
  }
  &::after {
    right: 9px;
  }
`

export const ChevronDoubleRightO = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledChevronDoubleRightO {...props} ref={ref} />
    </>
  )
})
