import React from 'react'
import styled from 'styled-components'

const StyledFlagAlt = styled.i``

export const FlagAlt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFlagAlt {...props} ref={ref} />
    </>
  )
})
