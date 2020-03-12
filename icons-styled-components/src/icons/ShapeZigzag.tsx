import React from 'react'
import styled from 'styled-components'

const StyledShapeZigzag = styled.i`
  &,
  &::after,
  &::before {
    display: block;
    box-sizing: border-box;
    width: 5px;
    height: 7px;
    border-left: 2px solid;
    border-bottom: 2px solid;
  }
  & {
    margin-left: -18px;
    transform: rotate(-49deg) scale(var(--ggs, 1));
    position: relative;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 5px;
  }
  &::before {
    left: 7px;
    top: 10px;
  }
`

export const ShapeZigzag = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledShapeZigzag {...props} ref={ref} />
    </>
  )
})
