import React from 'react'
import styled from 'styled-components'

const StyledArrowsExpandRightAlt = styled.i``

export const ArrowsExpandRightAlt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsExpandRightAlt {...props} ref={ref} />
    </>
  )
})
