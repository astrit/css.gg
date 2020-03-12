import React from 'react'
import styled from 'styled-components'

const StyledDropOpacity = styled.i``

export const DropOpacity = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDropOpacity {...props} ref={ref} />
    </>
  )
})
