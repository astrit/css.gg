import React from 'react'
import styled from 'styled-components'

const StyledGlassAlt = styled.i``

export const GlassAlt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledGlassAlt {...props} ref={ref} />
    </>
  )
})
