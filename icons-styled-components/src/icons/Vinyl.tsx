import React from 'react'
import styled from 'styled-components'

const StyledVinyl = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 8px;
    height: 8px;
    border: 3px solid transparent;
    box-shadow: 0 0 0 8px, inset 0 0 0 2px;
    border-radius: 22px;
  }
`

export const Vinyl = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledVinyl {...props} ref={ref} />
    </>
  )
})
