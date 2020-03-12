import React from 'react'
import styled from 'styled-components'

const StyledHamburger = styled.i``

export const Hamburger = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledHamburger {...props} ref={ref} />
    </>
  )
})
