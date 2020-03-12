import React from 'react'
import styled from 'styled-components'

const StyledMoreR = styled.i``

export const MoreR = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMoreR {...props} ref={ref} />
    </>
  )
})
