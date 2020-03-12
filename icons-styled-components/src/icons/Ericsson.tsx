import React from 'react'
import styled from 'styled-components'

const StyledEricsson = styled.i``

export const Ericsson = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledEricsson {...props} ref={ref} />
    </>
  )
})
