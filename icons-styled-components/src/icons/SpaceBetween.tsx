import React from 'react'
import styled from 'styled-components'

const StyledSpaceBetween = styled.i``

export const SpaceBetween = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSpaceBetween {...props} ref={ref} />
    </>
  )
})
