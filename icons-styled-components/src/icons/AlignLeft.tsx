import React from 'react'
import styled from 'styled-components'

const StyledAlignLeft = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    height: 12px;
    width: 12px;
    border-left: 2px solid;
    transform: scale(var(--ggs, 1));
    margin-left: -4px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 4px;
    width: 12px;
    background: currentColor;
    left: 2px;
    top: 1px;
  }
  &::after {
    width: 6px;
    top: 7px;
    opacity: 0.5;
  }
`

export const AlignLeft = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledAlignLeft {...props} ref={ref} />
    </>
  )
})
