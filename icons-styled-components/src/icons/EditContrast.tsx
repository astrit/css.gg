import React from 'react'
import styled from 'styled-components'

const StyledEditContrast = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
    border-radius: 100px;
    overflow: hidden;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 12px;
    background: currentColor;
  }
`

export const EditContrast = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledEditContrast {...props} ref={ref} />
    </>
  )
})
