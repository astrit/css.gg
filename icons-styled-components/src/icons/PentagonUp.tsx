import React from 'react'
import styled from 'styled-components'

const StyledPentagonUp = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 10px;
    height: 10px;
  }
  &:before {
    width: 51%;
  }
  &:after,
  &:before {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
  }
  &:before {
    left: -2px;
    border-top: 2px solid;
    border-left: 2px solid;
    border-bottom: 2px solid;
    transform: skew(0deg, -30deg);
  }
  &:after {
    right: -2px;
    width: 50%;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-top: 2px solid;
    transform: skew(0deg, 30deg);
  }
`

export const PentagonUp = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPentagonUp {...props} ref={ref} />
    </>
  )
})
