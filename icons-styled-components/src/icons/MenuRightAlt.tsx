import React from 'react'
import styled from 'styled-components'

const StyledMenuRightAlt = styled.i``

export const MenuRightAlt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMenuRightAlt {...props} ref={ref} />
    </>
  )
})
