import React from 'react'
import styled from 'styled-components'

const StyledInpicture = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 16px;
    border: 2px solid;
    border-radius: 2px;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 5px;
    background: currentColor;
    right: 2px;
    bottom: 2px;
  }
`

export const Inpicture = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledInpicture {...props} ref={ref} />
    </>
  )
})
