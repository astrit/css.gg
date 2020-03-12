import React from 'react'
import styled from 'styled-components'

const StyledHeadlamp = styled.i``

export const Headlamp = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledHeadlamp {...props} ref={ref} />
    </>
  )
})
