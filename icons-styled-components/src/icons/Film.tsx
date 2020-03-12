import React from 'react'
import styled from 'styled-components'

const StyledFilm = styled.i`
  &,
  &::after {
    display: block;
    box-sizing: border-box;
    border-radius: 3px;
  }
  & {
    border: 2px solid;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 18px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 2px;
    background: currentColor;
    left: 2px;
    top: 2px;
    box-shadow: 0 4px 0, 0 8px 0, 12px 0 0, 12px 4px 0, 12px 8px 0;
  }
`

export const Film = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFilm {...props} ref={ref} />
    </>
  )
})
