import React from 'react'
import styled from 'styled-components'

const StyledBrush = styled.i``

export const Brush = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBrush {...props} ref={ref} />
    </>
  )
})
