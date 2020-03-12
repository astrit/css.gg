import React from 'react'
import styled from 'styled-components'

const StyledDesignmodo = styled.i`
  & {
    display: block;
    position: relative;
    box-sizing: border-box;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 16px;
    background: linear-gradient(to left, currentColor 5px, transparent 0) no-repeat right 3px/8px
      3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
    width: 10px;
    height: 10px;
    border: 3px solid;
    border-radius: 10px;
  }
  &::after {
    width: 14px;
    height: 14px;
    border: 3px solid transparent;
    border-bottom: 3px solid;
    left: 3px;
    bottom: 0;
  }
`

export const Designmodo = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDesignmodo {...props} ref={ref} />
    </>
  )
})
