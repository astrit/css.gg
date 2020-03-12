import React from 'react'
import styled from 'styled-components'

const StyledMenuCheese = styled.i``

export const MenuCheese = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMenuCheese {...props} ref={ref} />
    </>
  )
})
