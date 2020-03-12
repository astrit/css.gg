import React from 'react'
import styled from 'styled-components'

const StyledArrowBottomLeft = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 8px;
    height: 8px;
    border-bottom: 2px solid;
    transform: scale(var(--ggs, 1));
    border-left: 2px solid;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 14px;
    height: 2px;
    background: currentColor;
    transform: rotate(-45deg);
    bottom: 3px;
    left: -3px;
  }
`

export const ArrowBottomLeft = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowBottomLeft {...props} ref={ref} />
    </>
  )
})
