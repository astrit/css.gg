import React from 'react'
import styled from 'styled-components'

const StyledPentagonLeft = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 10px;
    height: 8px;
  }
  &:before {
    height: 51%;
  }
  &:after,
  &:before {
    content: ' ';
    position: absolute;
    left: 0;
    width: 100%;
  }
  &:before {
    top: -2px;
    border-top: 2px solid;
    border-right: 2px solid;
    border-left: 2px solid;
    transform: skewX(-30deg);
  }
  &:after {
    bottom: -2px;
    height: 50%;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-left: 2px solid;
    transform: skewX(30deg);
  }
`

export const PentagonLeft = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPentagonLeft {...props} ref={ref} />
    </>
  )
})
