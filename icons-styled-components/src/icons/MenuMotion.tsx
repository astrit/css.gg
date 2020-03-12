import React from 'react'
import styled from 'styled-components'

const StyledMenuMotion = styled.i``

export const MenuMotion = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMenuMotion {...props} ref={ref} />
    </>
  )
})
