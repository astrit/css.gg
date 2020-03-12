import React from 'react'
import styled from 'styled-components'

const StyledAsterisk = styled.i``

export const Asterisk = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledAsterisk {...props} ref={ref} />
    </>
  )
})
