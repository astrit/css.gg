import React from 'react'
import styled from 'styled-components'

const StyledArrowsPushUpLeft = styled.i``

export const ArrowsPushUpLeft = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsPushUpLeft {...props} ref={ref} />
    </>
  )
})
