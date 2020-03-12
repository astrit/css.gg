import React from 'react'
import styled from 'styled-components'

const StyledGoogle = styled.i`
  &,
  &::before {
    box-sizing: border-box;
    display: block;
  }
  & {
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 20px;
    border: 4px solid;
    border-right-color: transparent;
    border-radius: 22px;
  }
  &::before {
    content: '';
    position: absolute;
    border-top: 4px solid;
    border-right: 4px solid;
    border-bottom: 4px solid;
    border-radius: 0 0 10px 0;
    width: 10px;
    height: 12px;
    right: -4px;
    bottom: -4px;
  }
`

export const Google = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledGoogle {...props} ref={ref} />
    </>
  )
})
