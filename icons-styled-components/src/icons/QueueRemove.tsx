import React from 'react'
import styled from 'styled-components'

const StyledQueueRemove = styled.i``

export const QueueRemove = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledQueueRemove {...props} ref={ref} />
    </>
  )
})
