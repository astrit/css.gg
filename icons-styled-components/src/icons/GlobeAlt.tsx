import React from 'react'
import styled from 'styled-components'

const StyledGlobeAlt = styled.i``

export const GlobeAlt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledGlobeAlt {...props} ref={ref} />
    </>
  )
})
