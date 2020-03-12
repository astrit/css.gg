import React from 'react'
import styled from 'styled-components'

const StyledMediaPodcast = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 14px;
    height: 14px;
    border: 2px solid;
    border-bottom-color: transparent;
    border-radius: 50%;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    top: 2px;
    left: 2px;
  }
  &::after {
    width: 22px;
    height: 22px;
    top: -6px;
    left: -6px;
  }
`

export const MediaPodcast = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMediaPodcast {...props} ref={ref} />
    </>
  )
})
