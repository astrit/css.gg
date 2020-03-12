import React from 'react'
import styled from 'styled-components'

const StyledGitPull = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 2px;
    height: 14px;
    background: currentColor;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    border-right: 2px solid;
    border-top: 2px solid;
    border-top-right-radius: 4px;
    width: 8px;
    height: 6px;
    left: 0;
    top: 2px;
  }
  &::after {
    width: 4px;
    height: 4px;
    background: currentColor;
    box-shadow: 0 12px 0 0, 6px 8px 0 0;
    border-radius: 100%;
    left: -1px;
    top: -1px;
  }
`

export const GitPull = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledGitPull {...props} ref={ref} />
    </>
  )
})
