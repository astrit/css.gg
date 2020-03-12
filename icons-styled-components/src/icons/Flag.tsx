import React from 'react'
import styled from 'styled-components'

const StyledFlag = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 18px;
    border-left: 2px solid;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 8px;
  }
  &::before {
    border-top: 2px solid;
    border-bottom: 2px solid;
  }
  &::after {
    border: 2px solid;
    border-left: 0;
    top: 2px;
    left: 7px;
  }
`

export const Flag = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFlag {...props} ref={ref} />
    </>
  )
})
