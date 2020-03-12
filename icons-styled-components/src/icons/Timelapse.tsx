import React from 'react'
import styled from 'styled-components'

const StyledTimelapse = styled.i``

export const Timelapse = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTimelapse {...props} ref={ref} />
    </>
  )
})
