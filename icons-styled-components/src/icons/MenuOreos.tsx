import React from 'react'
import styled from 'styled-components'

const StyledMenuOreos = styled.i``

export const MenuOreos = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMenuOreos {...props} ref={ref} />
    </>
  )
})
