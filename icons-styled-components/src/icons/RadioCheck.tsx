import React from 'react'
import styled from 'styled-components'

const StyledRadioCheck = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 20px;
    border: 2px solid;
    border-radius: 100px;
  }
`

export const RadioCheck = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledRadioCheck {...props} ref={ref} />
    </>
  )
})
