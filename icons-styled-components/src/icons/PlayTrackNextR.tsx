import React from 'react'
import styled from 'styled-components'

const StyledPlayTrackNextR = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border: 2px solid;
    border-radius: 4px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 8px;
    top: 5px;
  }
  &::before {
    width: 2px;
    border-radius: 2px;
    left: 11px;
    background: currentColor;
  }
  &::after {
    width: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 5px solid;
    left: 5px;
  }
`

export const PlayTrackNextR = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPlayTrackNextR {...props} ref={ref} />
    </>
  )
})
