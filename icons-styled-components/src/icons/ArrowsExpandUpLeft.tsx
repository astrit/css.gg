import React from 'react'
import styled from 'styled-components'

const StyledArrowsExpandUpLeft = styled.i``

export const ArrowsExpandUpLeft = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsExpandUpLeft {...props} ref={ref} />
    </>
  )
})
