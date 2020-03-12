import React from 'react'
import styled from 'styled-components'

const StyledComponents = styled.i``

export const Components = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledComponents {...props} ref={ref} />
    </>
  )
})
