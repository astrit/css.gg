import React from 'react'
import styled from 'styled-components'

const StyledNotes = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 22px;
    border: 2px solid;
    border-radius: 3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    height: 2px;
    background: currentColor;
    left: 2px;
  }
  &::before {
    box-shadow: 0 4px 0, 0 8px 0;
    width: 12px;
    top: 2px;
  }
  &::after {
    width: 6px;
    top: 14px;
  }
`

export const Notes = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledNotes {...props} ref={ref} />
    </>
  )
})
