import React from 'react'
import styled from 'styled-components'

const StyledDockRight = styled.i``

export const DockRight = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDockRight {...props} ref={ref} />
    </>
  )
})
