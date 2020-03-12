import React from 'react'
import styled from 'styled-components'

const StyledArrowsPushUpRight = styled.i``

export const ArrowsPushUpRight = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsPushUpRight {...props} ref={ref} />
    </>
  )
})
