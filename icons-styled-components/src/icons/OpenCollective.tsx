import React from 'react'
import styled from 'styled-components'

const StyledOpenCollective = styled.i``

export const OpenCollective = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledOpenCollective {...props} ref={ref} />
    </>
  )
})
