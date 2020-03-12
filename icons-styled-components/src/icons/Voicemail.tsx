import React from 'react'
import styled from 'styled-components'

const StyledVoicemail = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 12px;
    height: 10px;
    border-bottom: 2px solid;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 10px;
    border: 2px solid;
    border-radius: 10px;
    top: 0;
    left: -5px;
  }
  &::after {
    left: 7px;
  }
`

export const Voicemail = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledVoicemail {...props} ref={ref} />
    </>
  )
})
