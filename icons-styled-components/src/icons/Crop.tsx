import React from 'react'
import styled from 'styled-components'

const StyledCrop = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 20px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 14px;
    height: 14px;
  }
  &::before {
    border-right: 2px solid;
    border-top: 2px solid;
    left: 1px;
    top: 5px;
  }
  &::after {
    border-left: 2px solid;
    border-bottom: 2px solid;
    top: 1px;
    right: 1px;
  }
`

export const Crop = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCrop {...props} ref={ref} />
    </>
  )
})
