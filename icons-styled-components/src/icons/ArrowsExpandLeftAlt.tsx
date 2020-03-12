import React from 'react'
import styled from 'styled-components'

const StyledArrowsExpandLeftAlt = styled.i``

export const ArrowsExpandLeftAlt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsExpandLeftAlt {...props} ref={ref} />
    </>
  )
})
