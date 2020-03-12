import React from 'react'
import styled from 'styled-components'

const StyledArrowsExpandLeft = styled.i``

export const ArrowsExpandLeft = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsExpandLeft {...props} ref={ref} />
    </>
  )
})
