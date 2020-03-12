import React from 'react'
import styled from 'styled-components'

const StyledPlug = styled.i``

export const Plug = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPlug {...props} ref={ref} />
    </>
  )
})
