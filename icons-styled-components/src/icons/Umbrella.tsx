import React from 'react'
import styled from 'styled-components'

const StyledUmbrella = styled.i``

export const Umbrella = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledUmbrella {...props} ref={ref} />
    </>
  )
})
