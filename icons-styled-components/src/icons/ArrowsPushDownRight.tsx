import React from 'react'
import styled from 'styled-components'

const StyledArrowsPushDownRight = styled.i``

export const ArrowsPushDownRight = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsPushDownRight {...props} ref={ref} />
    </>
  )
})
