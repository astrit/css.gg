import React from 'react'
import styled from 'styled-components'

const StyledBee = styled.i``

export const Bee = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBee {...props} ref={ref} />
    </>
  )
})
