import React from 'react'
import styled from 'styled-components'

const StyledPlayList = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 12px;
    height: 6px;
    border-top: 0 solid transparent;
    border-bottom: 2px solid transparent;
    box-shadow: inset 0 -2px 0, -2px 4px 0 -2px, 0 -2px 0 0;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 0;
    height: 0;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-left: 5px solid;
    top: 6px;
    right: -3px;
  }
`

export const PlayList = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPlayList {...props} ref={ref} />
    </>
  )
})
