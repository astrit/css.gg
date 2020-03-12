import React from 'react'
import styled from 'styled-components'

const StyledOculus = styled.i`
  & {
    display: block;
    position: relative;
    box-sizing: border-box;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 12px;
    border: 4px solid;
    border-radius: 22px;
  }
`

export const Oculus = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledOculus {...props} ref={ref} />
    </>
  )
})
