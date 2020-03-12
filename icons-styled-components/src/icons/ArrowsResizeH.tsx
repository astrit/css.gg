import React from 'react'
import styled from 'styled-components'

const StyledArrowsResizeH = styled.i``

export const ArrowsResizeH = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsResizeH {...props} ref={ref} />
    </>
  )
})
