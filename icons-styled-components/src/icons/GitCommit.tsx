import React from 'react'
import styled from 'styled-components'

const StyledGitCommit = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 2px;
    height: 16px;
    border-radius: 3px;
    border-top: 6px solid;
    border-bottom: 6px solid;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 2px;
    height: 2px;
    box-shadow: 0 0 0 2px;
    border-radius: 100%;
    left: 0;
    top: 1px;
  }
`

export const GitCommit = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledGitCommit {...props} ref={ref} />
    </>
  )
})
