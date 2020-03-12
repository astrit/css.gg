import React from 'react'
import styled from 'styled-components'

const StyledTapSingle = styled.i``

export const TapSingle = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTapSingle {...props} ref={ref} />
    </>
  )
})
