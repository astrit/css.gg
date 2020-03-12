import React from 'react'
import styled from 'styled-components'

const StyledGenderFemale = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 10px;
    height: 10px;
    border: 2px solid;
    border-radius: 100%;
    margin-top: -4px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 2px;
    background: currentColor;
    bottom: -6px;
    left: -1px;
  }
  &::before {
    width: 2px;
    height: 9px;
    bottom: -9px;
    left: 2px;
  }
`

export const GenderFemale = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledGenderFemale {...props} ref={ref} />
    </>
  )
})
