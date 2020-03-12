import React from 'react'
import styled from 'styled-components'

const StyledSpinnerTwo = styled.i``

export const SpinnerTwo = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSpinnerTwo {...props} ref={ref} />
    </>
  )
})
