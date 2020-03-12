import React from 'react'
import styled from 'styled-components'

const StyledToday = styled.i``

export const Today = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledToday {...props} ref={ref} />
    </>
  )
})
