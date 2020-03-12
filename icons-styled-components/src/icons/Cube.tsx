import React from 'react'
import styled from 'styled-components'

const StyledCube = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 18px;
    height: 18px;
    transform: scale(var(--ggs, 1));
    background-color: red;
  }
`

export const Cube = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCube {...props} ref={ref} />
    </>
  )
})
