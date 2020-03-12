import React from 'react'
import styled from 'styled-components'

const StyledBitbucket = styled.i``

export const Bitbucket = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBitbucket {...props} ref={ref} />
    </>
  )
})
