import React from 'react'
import styled from 'styled-components'

const StyledDotCarousel = styled.i``

export const DotCarousel = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDotCarousel {...props} ref={ref} />
    </>
  )
})
