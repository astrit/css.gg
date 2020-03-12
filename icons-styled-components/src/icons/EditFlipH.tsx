import React from 'react'
import styled from 'styled-components'

const StyledEditFlipH = styled.i``

export const EditFlipH = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledEditFlipH {...props} ref={ref} />
    </>
  )
})
