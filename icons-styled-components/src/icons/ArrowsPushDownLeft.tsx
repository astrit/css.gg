import React from 'react'
import styled from 'styled-components'

const StyledArrowsPushDownLeft = styled.i``

export const ArrowsPushDownLeft = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsPushDownLeft {...props} ref={ref} />
    </>
  )
})
