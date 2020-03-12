import React from 'react'
import styled from 'styled-components'

const StyledDropInvert = styled.i``

export const DropInvert = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDropInvert {...props} ref={ref} />
    </>
  )
})
