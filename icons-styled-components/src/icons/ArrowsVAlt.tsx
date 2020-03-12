import React from 'react'
import styled from 'styled-components'

const StyledArrowsVAlt = styled.i``

export const ArrowsVAlt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsVAlt {...props} ref={ref} />
    </>
  )
})
