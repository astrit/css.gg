import React from 'react'
import styled from 'styled-components'

const StyledInteligence = styled.i``

export const Inteligence = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledInteligence {...props} ref={ref} />
    </>
  )
})
