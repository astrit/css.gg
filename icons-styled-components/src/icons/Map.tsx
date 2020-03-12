import React from 'react'
import styled from 'styled-components'

const StyledMap = styled.i``

export const Map = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMap {...props} ref={ref} />
    </>
  )
})
