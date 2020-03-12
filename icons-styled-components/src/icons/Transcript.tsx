import React from 'react'
import styled from 'styled-components'

const StyledTranscript = styled.i``

export const Transcript = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTranscript {...props} ref={ref} />
    </>
  )
})
