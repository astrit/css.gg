import React from 'react'
import styled from 'styled-components'

const StyledEditNoise = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
    border-radius: 100px;
    overflow: hidden;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 12px;
    height: 12px;
    background-image: radial-gradient(circle, currentColor 25%, transparent 25%),
      radial-gradient(circle, currentColor 25%, transparent 25%);
    background-position: 4px 4px, 2px 2px;
    background-size: 4px 4px;
  }
`

export const EditNoise = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledEditNoise {...props} ref={ref} />
    </>
  )
})
