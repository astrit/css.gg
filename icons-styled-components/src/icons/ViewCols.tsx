import React from 'react'
import styled from 'styled-components'

const StyledViewCols = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    border: 2px solid;
    border-radius: 3px;
    width: 20px;
    height: 14px;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 2px;
    height: 12px;
    top: -2px;
    left: 4px;
    background: currentColor;
    box-shadow: 6px 0 0;
  }
`

export const ViewCols = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledViewCols {...props} ref={ref} />
    </>
  )
})
