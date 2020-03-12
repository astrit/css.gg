import React from 'react'
import styled from 'styled-components'

const StyledEditFlipV = styled.i``

export const EditFlipV = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledEditFlipV {...props} ref={ref} />
    </>
  )
})
