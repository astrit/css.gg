import React from 'react'
import styled from 'styled-components'

const StyledBriefcase = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 16px;
    border: 2px solid;
    border-radius: 2px;
    margin-top: 1px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    border: 2px solid;
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
    left: 4px;
    width: 10px;
    height: 4px;
    border-bottom: 0;
    top: -5px;
  }
  &::after {
    width: 18px;
    height: 3px;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 1px solid transparent;
    box-shadow: 0 2px 0, inset 16px 74px 0;
    top: 4px;
  }
`

export const Briefcase = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBriefcase {...props} ref={ref} />
    </>
  )
})
