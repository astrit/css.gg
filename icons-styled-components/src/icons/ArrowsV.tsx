import React from 'react'
import styled from 'styled-components'

const StyledArrowsV = styled.i``

export const ArrowsV = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsV {...props} ref={ref} />
    </>
  )
})
