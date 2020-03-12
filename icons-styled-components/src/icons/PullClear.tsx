import React from 'react'
import styled from 'styled-components'

const StyledPullClear = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 12px;
    border: 2px solid;
    border-top: 0;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 12px;
    height: 2px;
    bottom: 2px;
    left: 2px;
    background: currentColor;
    box-shadow: 0 -4px 0 0;
  }
`

export const PullClear = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPullClear {...props} ref={ref} />
    </>
  )
})
