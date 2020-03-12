import React from 'react'
import styled from 'styled-components'

const StyledProfile = styled.i`
  &,
  &::after,
  &::before {
    display: block;
    box-sizing: border-box;
    border: 2px solid;
    border-radius: 100px;
  }
  & {
    overflow: hidden;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    position: relative;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 5px;
    width: 8px;
    height: 8px;
  }
  &::after {
    border-radius: 200px;
    top: 12px;
    left: -2px;
    width: 22px;
    height: 22px;
  }
`

export const Profile = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledProfile {...props} ref={ref} />
    </>
  )
})
