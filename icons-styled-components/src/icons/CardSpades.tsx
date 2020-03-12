import React from 'react'
import styled from 'styled-components'

const StyledCardSpades = styled.i``

export const CardSpades = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCardSpades {...props} ref={ref} />
    </>
  )
})
