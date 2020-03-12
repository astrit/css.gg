import React from 'react'
import styled from 'styled-components'

const StyledAttribution = styled.i``

export const Attribution = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledAttribution {...props} ref={ref} />
    </>
  )
})
