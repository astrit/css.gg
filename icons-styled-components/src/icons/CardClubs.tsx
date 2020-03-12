import React from 'react'
import styled from 'styled-components'

const StyledCardClubs = styled.i``

export const CardClubs = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCardClubs {...props} ref={ref} />
    </>
  )
})
