import React from 'react'
import styled from 'styled-components'

const StyledPlayStop = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 10px;
    height: 10px;
    background: currentColor;
  }
`

export const PlayStop = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPlayStop {...props} ref={ref} />
    </>
  )
})
