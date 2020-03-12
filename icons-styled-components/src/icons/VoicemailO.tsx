import React from 'react'
import styled from 'styled-components'

const StyledVoicemailO = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    background: linear-gradient(to left, currentColor 10px, transparent 0) no-repeat 5px 10px/8px
      2px;
    border-radius: 30px;
    border: 2px solid;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    border: 2px solid;
    border-radius: 10px;
    top: 6px;
  }
  &::before {
    left: 2px;
  }
  &::after {
    right: 2px;
  }
`

export const VoicemailO = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledVoicemailO {...props} ref={ref} />
    </>
  )
})
