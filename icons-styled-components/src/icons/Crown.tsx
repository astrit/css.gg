import React from 'react'
import styled from 'styled-components'

const StyledCrown = styled.i``

export const Crown = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCrown {...props} ref={ref} />
    </>
  )
})
