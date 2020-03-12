import React from 'react'
import styled from 'styled-components'

const StyledPlayPause = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 8px;
    height: 10px;
    border-left: 3px solid;
    border-right: 3px solid;
  }
`

export const PlayPause = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPlayPause {...props} ref={ref} />
    </>
  )
})
