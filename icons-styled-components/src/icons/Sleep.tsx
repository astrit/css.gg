import React from 'react'
import styled from 'styled-components'

const StyledSleep = styled.i``

export const Sleep = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSleep {...props} ref={ref} />
    </>
  )
})
