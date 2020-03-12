import React from 'react'
import styled from 'styled-components'

const StyledLoupe = styled.i``

export const Loupe = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledLoupe {...props} ref={ref} />
    </>
  )
})
