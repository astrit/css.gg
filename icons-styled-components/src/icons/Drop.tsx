import React from 'react'
import styled from 'styled-components'

const StyledDrop = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: rotate(45deg) scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border-radius: 0 100% 100% 100%;
    box-shadow: inset 0 0 0 2px;
    margin-top: 3px;
  }
`

export const Drop = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDrop {...props} ref={ref} />
    </>
  )
})
