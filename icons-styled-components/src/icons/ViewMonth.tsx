import React from 'react'
import styled from 'styled-components'

const StyledViewMonth = styled.i`
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
    width: 2px;
    height: 14px;
    top: -2px;
    left: 3px;
    background: currentColor;
    box-shadow: 4px 0 0, 8px 0 0;
  }
  &::before {
    width: 20px;
    height: 2px;
    left: -2px;
    top: 2px;
    box-shadow: 0 4px 0;
  }
`

export const ViewMonth = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledViewMonth {...props} ref={ref} />
    </>
  )
})
