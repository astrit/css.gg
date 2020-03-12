import React from 'react'
import styled from 'styled-components'

const StyledPlayPauseR = styled.i`
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
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    left: 6px;
    top: 6px;
    border-left: 2px solid;
    border-right: 2px solid;
  }
`

export const PlayPauseR = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPlayPauseR {...props} ref={ref} />
    </>
  )
})
