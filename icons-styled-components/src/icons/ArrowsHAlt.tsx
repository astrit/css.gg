import React from 'react'
import styled from 'styled-components'

const StyledArrowsHAlt = styled.i``

export const ArrowsHAlt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsHAlt {...props} ref={ref} />
    </>
  )
})
