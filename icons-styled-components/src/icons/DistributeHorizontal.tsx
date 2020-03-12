import React from 'react'
import styled from 'styled-components'

const StyledDistributeHorizontal = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    height: 14px;
    width: 14px;
    border-left: 2px solid;
    border-right: 2px solid;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 8px;
    width: 4px;
    background: currentColor;
    right: 3px;
    top: 3px;
    opacity: 0.5;
  }
`

export const DistributeHorizontal = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDistributeHorizontal {...props} ref={ref} />
    </>
  )
})
