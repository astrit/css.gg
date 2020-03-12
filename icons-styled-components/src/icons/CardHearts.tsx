import React from 'react'
import styled from 'styled-components'

const StyledCardHearts = styled.i``

export const CardHearts = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCardHearts {...props} ref={ref} />
    </>
  )
})
