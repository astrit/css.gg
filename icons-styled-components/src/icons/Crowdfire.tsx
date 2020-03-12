import React from 'react'
import styled from 'styled-components'

const StyledCrowdfire = styled.i`
  & {
    display: block;
    box-sizing: border-box;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 20px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
  }
  &::before {
    width: 20px;
    height: 20px;
    border: 4px solid;
    border-radius: 100px;
    border-right-color: transparent;
    transform: rotate(-45deg);
  }
  &::after {
    width: 8px;
    height: 8px;
    border-top: 4px solid;
    border-right: 4px solid;
    right: 2px;
    top: 2px;
  }
`

export const Crowdfire = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCrowdfire {...props} ref={ref} />
    </>
  )
})
