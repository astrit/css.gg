import React from 'react'
import styled from 'styled-components'

const StyledDockLeft = styled.i``

export const DockLeft = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDockLeft {...props} ref={ref} />
    </>
  )
})
