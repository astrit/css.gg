import React from 'react'
import styled from 'styled-components'

const StyledDistributeVertical = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    height: 14px;
    width: 14px;
    border-top: 2px solid;
    border-bottom: 2px solid;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 4px;
    width: 8px;
    background: currentColor;
    right: 3px;
    top: 3px;
    opacity: 0.5;
  }
`

export const DistributeVertical = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDistributeVertical {...props} ref={ref} />
    </>
  )
})
