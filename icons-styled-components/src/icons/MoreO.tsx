import React from 'react'
import styled from 'styled-components'

const StyledMoreO = styled.i``

export const MoreO = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMoreO {...props} ref={ref} />
    </>
  )
})
