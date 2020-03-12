import React from 'react'
import styled from 'styled-components'

const StyledMenuGridO = styled.i``

export const MenuGridO = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMenuGridO {...props} ref={ref} />
    </>
  )
})
