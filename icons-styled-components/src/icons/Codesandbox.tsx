import React from 'react'
import styled from 'styled-components'

const StyledCodesandbox = styled.i``

export const Codesandbox = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCodesandbox {...props} ref={ref} />
    </>
  )
})
