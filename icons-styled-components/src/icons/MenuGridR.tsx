import React from 'react'
import styled from 'styled-components'

const StyledMenuGridR = styled.i``

export const MenuGridR = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMenuGridR {...props} ref={ref} />
    </>
  )
})
