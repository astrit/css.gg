import React from 'react'
import styled from 'styled-components'

const StyledPokemon = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border: 5px solid transparent;
    box-shadow: 0 0 0 2px, inset 0 0 0 2px;
    border-radius: 100%;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 20px;
    height: 2px;
    border-left: 8px solid;
    border-right: 8px solid;
    left: -6px;
    top: 3px;
  }
`

export const Pokemon = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPokemon {...props} ref={ref} />
    </>
  )
})
