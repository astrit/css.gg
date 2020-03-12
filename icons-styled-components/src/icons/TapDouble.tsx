import React from 'react'
import styled from 'styled-components'

const StyledTapDouble = styled.i``

export const TapDouble = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTapDouble {...props} ref={ref} />
    </>
  )
})
