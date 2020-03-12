import React from 'react'
import styled from 'styled-components'

const StyledTrack = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 10px;
    height: 10px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px, inset 0 0 0 10px;
    border-radius: 100px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
  }
  &::before {
    border-left: 4px solid;
    border-right: 4px solid;
    width: 18px;
    height: 2px;
    left: -6px;
    top: 2px;
  }
  &::after {
    width: 2px;
    height: 18px;
    border-top: 4px solid;
    border-bottom: 4px solid;
    left: 2px;
    top: -6px;
  }
`

export const Track = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTrack {...props} ref={ref} />
    </>
  )
})
