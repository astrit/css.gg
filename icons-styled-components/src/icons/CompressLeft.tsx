import React from 'react'
import styled from 'styled-components'

const StyledCompressLeft = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: rotate(-45deg) scale(var(--ggs, 1));
    width: 2px;
    height: 26px;
    border-top: 10px solid;
    border-bottom: 10px solid;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    transform: rotate(45deg);
    left: -2px;
  }
  &::after {
    border-bottom: 2px solid;
    border-right: 2px solid;
    top: -5px;
  }
  &::before {
    border-top: 2px solid;
    border-left: 2px solid;
    bottom: -5px;
  }
`

export const CompressLeft = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCompressLeft {...props} ref={ref} />
    </>
  )
})
