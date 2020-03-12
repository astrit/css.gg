import React from 'react'
import styled from 'styled-components'

const StyledAbstract = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 14px;
    height: 14px;
    transform: scale(var(--ggs, 1));
    border-right: 3px solid;
    border-top: 3px solid;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 10px;
    left: 0;
    bottom: 0;
    border: 3px solid;
    border-radius: 12px;
  }
`

export const Abstract = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledAbstract {...props} ref={ref} />
    </>
  )
})
