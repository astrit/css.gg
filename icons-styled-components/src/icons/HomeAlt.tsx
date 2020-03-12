import React from 'react'
import styled from 'styled-components'

const StyledHomeAlt = styled.i``

export const HomeAlt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledHomeAlt {...props} ref={ref} />
    </>
  )
})
