import React from 'react'
import styled from 'styled-components'

const StyledMenuCake = styled.i``

export const MenuCake = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMenuCake {...props} ref={ref} />
    </>
  )
})
