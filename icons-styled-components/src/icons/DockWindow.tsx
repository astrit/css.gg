import React from 'react'
import styled from 'styled-components'

const StyledDockWindow = styled.i``

export const DockWindow = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDockWindow {...props} ref={ref} />
    </>
  )
})
