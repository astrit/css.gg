import React from 'react'
import styled from 'styled-components'

const StyledStudio = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border: 2px solid;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 4px;
    height: 4px;
    background: currentColor;
    right: 2px;
    bottom: 2px;
  }
`

export const Studio = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledStudio {...props} ref={ref} />
    </>
  )
})
