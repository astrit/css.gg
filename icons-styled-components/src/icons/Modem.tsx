import React from 'react'
import styled from 'styled-components'

const StyledModem = styled.i``

export const Modem = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledModem {...props} ref={ref} />
    </>
  )
})
