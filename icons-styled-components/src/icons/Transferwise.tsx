import React from 'react'
import styled from 'styled-components'

const StyledTransferwise = styled.i``

export const Transferwise = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTransferwise {...props} ref={ref} />
    </>
  )
})
