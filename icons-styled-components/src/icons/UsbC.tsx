import React from 'react'
import styled from 'styled-components'

const StyledUsbC = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 6px;
    border: 2px solid transparent;
    border-radius: 100px;
    box-shadow: 0 0 0 2px, inset 0 0 0 10px;
  }
`

export const UsbC = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledUsbC {...props} ref={ref} />
    </>
  )
})
