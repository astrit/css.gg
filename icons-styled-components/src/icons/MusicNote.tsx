import React from 'react'
import styled from 'styled-components'

const StyledMusicNote = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 2px;
    height: 14px;
    background: currentColor;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border: 2px solid;
  }
  &::before {
    bottom: -4px;
    width: 8px;
    height: 8px;
    left: -6px;
    border-radius: 10px;
  }
  &::after {
    width: 10px;
    height: 6px;
    top: -4px;
    left: 0;
    border-radius: 2px;
    transform: skewY(-15deg);
  }
`

export const MusicNote = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMusicNote {...props} ref={ref} />
    </>
  )
})
