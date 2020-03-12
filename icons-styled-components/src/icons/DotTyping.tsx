import React from 'react'
import styled from 'styled-components'

const StyledDotTyping = styled.i``

export const DotTyping = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledDotTyping {...props} ref={ref} />
    </>
  )
})
