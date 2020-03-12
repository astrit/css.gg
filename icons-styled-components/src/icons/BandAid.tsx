import React from 'react'
import styled from 'styled-components'

const StyledBandAid = styled.i``

export const BandAid = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBandAid {...props} ref={ref} />
    </>
  )
})
