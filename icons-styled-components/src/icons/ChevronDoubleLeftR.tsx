import React from 'react'
import styled from 'styled-components'

const StyledChevronDoubleLeftR = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    border: 2px solid;
    border-radius: 4px;
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
    border-left: 2px solid;
    border-bottom: 2px solid;
    transform: rotate(45deg);
    top: 6px;
    left: 5px;
  }
  &::after {
    left: 9px;
  }
`

export const ChevronDoubleLeftR = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledChevronDoubleLeftR {...props} ref={ref} />
    </>
  )
})
