import React from 'react'
import styled from 'styled-components'

const StyledSpectrum = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 16px;
    overflow: hidden;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 30px;
    height: 30px;
    left: -15px;
    bottom: -15px;
    border: 8px solid;
    border-radius: 18px;
  }
`

export const Spectrum = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSpectrum {...props} ref={ref} />
    </>
  )
})
