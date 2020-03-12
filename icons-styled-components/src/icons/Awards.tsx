import React from 'react'
import styled from 'styled-components'

const StyledAwards = styled.i``

export const Awards = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledAwards {...props} ref={ref} />
    </>
  )
})
