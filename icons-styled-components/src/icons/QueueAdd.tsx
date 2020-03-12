import React from 'react'
import styled from 'styled-components'

const StyledQueueAdd = styled.i``

export const QueueAdd = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledQueueAdd {...props} ref={ref} />
    </>
  )
})
