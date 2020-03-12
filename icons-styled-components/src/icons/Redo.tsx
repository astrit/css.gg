import React from 'react'
import styled from 'styled-components'

const StyledRedo = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 14px;
    border: 2px solid;
    border-right-color: transparent;
    border-radius: 100px;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    border-top: 2px solid;
    border-right: 2px solid;
    top: -3px;
    right: -1px;
    transform: rotate(68deg);
  }
`

export const Redo = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledRedo {...props} ref={ref} />
    </>
  )
})
