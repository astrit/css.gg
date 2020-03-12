import React from 'react'
import styled from 'styled-components'

const StyledFacebook = styled.i``

export const Facebook = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFacebook {...props} ref={ref} />
    </>
  )
})
