import React from 'react'
import styled from 'styled-components'

const StyledEyeAlt = styled.i``

export const EyeAlt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledEyeAlt {...props} ref={ref} />
    </>
  )
})
