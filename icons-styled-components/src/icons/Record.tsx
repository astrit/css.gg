import React from 'react'
import styled from 'styled-components'

const StyledRecord = styled.i``

export const Record = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledRecord {...props} ref={ref} />
    </>
  )
})
