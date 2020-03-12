import React from 'react'
import styled from 'styled-components'

const StyledArrowsH = styled.i``

export const ArrowsH = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsH {...props} ref={ref} />
    </>
  )
})
