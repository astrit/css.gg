import React from 'react'
import styled from 'styled-components'

const StyledDrive = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 26px;
    height: 10px;
    border: 2px solid;
    border-radius: 2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 10px;
    background: currentColor;
    top: 2px;
    right: 2px;
  }
  &::before {
    right: 6px;
  }
`

export const Drive = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDrive {...props} ref={ref} />
    </>
  )
})
