import React from 'react'
import styled from 'styled-components'

const StyledUserlane = styled.i``

export const Userlane = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledUserlane {...props} ref={ref} />
    </>
  )
})
