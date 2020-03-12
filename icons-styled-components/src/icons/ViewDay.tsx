import React from 'react'
import styled from 'styled-components'

const StyledViewDay = styled.i`
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
    height: 12px;
    top: -2px;
    left: 7px;
    background: currentColor;
  }
  &::before {
    width: 20px;
    height: 2px;
    left: -2px;
    top: 4px;
  }
`

export const ViewDay = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledViewDay {...props} ref={ref} />
    </>
  )
})
