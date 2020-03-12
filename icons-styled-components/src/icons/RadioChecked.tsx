import React from 'react'
import styled from 'styled-components'

const StyledRadioChecked = styled.i`
  &,
  &::after {
    display: block;
    box-sizing: border-box;
    border-radius: 100px;
  }
  & {
    border: 2px solid;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 20px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: currentColor;
    top: 4px;
    left: 4px;
  }
`

export const RadioChecked = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledRadioChecked {...props} ref={ref} />
    </>
  )
})
