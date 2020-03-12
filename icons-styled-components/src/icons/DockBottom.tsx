import React from 'react'
import styled from 'styled-components'

const StyledDockBottom = styled.i``

export const DockBottom = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDockBottom {...props} ref={ref} />
    </>
  )
})
