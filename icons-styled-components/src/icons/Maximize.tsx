import React from 'react'
import styled from 'styled-components'

const StyledMaximize = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 14px;
    box-shadow: -6px -6px 0 -4px, 6px 6px 0 -4px, 6px -6px 0 -4px, -6px 6px 0 -4px;
  }
`

export const Maximize = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMaximize {...props} ref={ref} />
    </>
  )
})
