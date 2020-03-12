import React from 'react'
import styled from 'styled-components'

const StyledMenuHotdog = styled.i``

export const MenuHotdog = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMenuHotdog {...props} ref={ref} />
    </>
  )
})
