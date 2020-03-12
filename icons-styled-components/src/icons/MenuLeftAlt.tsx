import React from 'react'
import styled from 'styled-components'

const StyledMenuLeftAlt = styled.i``

export const MenuLeftAlt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMenuLeftAlt {...props} ref={ref} />
    </>
  )
})
