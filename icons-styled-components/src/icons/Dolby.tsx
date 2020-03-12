import React from 'react'
import styled from 'styled-components'

const StyledDolby = styled.i`
  &,
  &::after,
  &::before {
    display: block;
    box-sizing: border-box;
    height: 16px;
    border: 4px solid;
  }
  & {
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 24px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 14px;
    top: -4px;
  }
  &::before {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    left: -4px;
  }
  &::after {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    right: -4px;
  }
`

export const Dolby = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDolby {...props} ref={ref} />
    </>
  )
})
