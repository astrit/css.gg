import React from 'react'
import styled from 'styled-components'

const StyledViewComfortable = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    border: 2px solid;
    border-radius: 3px;
    width: 20px;
    height: 14px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    background: currentColor;
  }
  &::after {
    width: 2px;
    height: 8px;
    bottom: -2px;
    left: 4px;
  }
  &::before {
    width: 20px;
    height: 2px;
    left: -2px;
    top: 4px;
  }
`

export const ViewComfortable = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledViewComfortable {...props} ref={ref} />
    </>
  )
})
