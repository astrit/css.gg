import React from 'react'
import styled from 'styled-components'

const StyledStyle = styled.i``

export const Style = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledStyle {...props} ref={ref} />
    </>
  )
})
