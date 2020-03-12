import React from 'react'
import styled from 'styled-components'

const StyledDribbble = styled.i`
  & {
    background: radial-gradient(
        circle at 50%,
        transparent 0,
        transparent 9px,
        currentColor 9.2px,
        currentColor 11px,
        transparent 11.2px
      )
      no-repeat -8px center;
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: rotate(-25deg) scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    box-shadow: inset 0 0 0 2px;
    border-radius: 50%;
    overflow: hidden;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 50%;
    border: 2px solid;
    height: 26px;
  }
  &::before {
    width: 36px;
    left: -6px;
    top: -15px;
  }
  &::after {
    top: 13px;
    left: -7px;
    width: 31px;
  }
`

export const Dribbble = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDribbble {...props} ref={ref} />
    </>
  )
})
