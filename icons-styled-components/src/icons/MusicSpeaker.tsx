import React from 'react'
import styled from 'styled-components'

const StyledMusicSpeaker = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 22px;
    border: 2px solid;
    border-radius: 3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border: 2px solid;
    border-radius: 100px;
  }
  &::before {
    bottom: 2px;
    width: 8px;
    height: 8px;
    left: 2px;
  }
  &::after {
    width: 4px;
    height: 4px;
    left: 4px;
    top: 2px;
  }
`

export const MusicSpeaker = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMusicSpeaker {...props} ref={ref} />
    </>
  )
})
