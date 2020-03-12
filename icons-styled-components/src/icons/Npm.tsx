import React from 'react'
import styled from 'styled-components'

const StyledNpm = styled.i``

export const Npm = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledNpm {...props} ref={ref} />
    </>
  )
})
