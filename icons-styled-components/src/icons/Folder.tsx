import React from 'react'
import styled from 'styled-components'

const StyledFolder = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 22px;
    height: 16px;
    border: 2px solid;
    border-radius: 3px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 4px;
    border-bottom: 0;
    border-top-left-radius: 2px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    top: -5px;
  }
`

export const Folder = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFolder {...props} ref={ref} />
    </>
  )
})
