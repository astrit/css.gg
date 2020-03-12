import React from 'react'
import styled from 'styled-components'

const StyledMiniPlayer = styled.i``

export const MiniPlayer = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMiniPlayer {...props} ref={ref} />
    </>
  )
})
