import React from 'react'
import styled from 'styled-components'

const StyledBlock = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 16px;
    border: 2px solid;
    border-radius: 100%;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 2px;
    background: currentColor;
    border-radius: 5px;
    transform: rotate(-45deg);
    top: 5px;
    left: 1px;
  }
`

export const Block = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBlock {...props} ref={ref} />
    </>
  )
})
