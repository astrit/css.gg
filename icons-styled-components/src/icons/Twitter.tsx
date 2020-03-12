import React from 'react'
import styled from 'styled-components'

const StyledTwitter = styled.i``

export const Twitter = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTwitter {...props} ref={ref} />
    </>
  )
})
