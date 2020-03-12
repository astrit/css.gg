import React from 'react'
import styled from 'styled-components'

const StyledUserAdd = styled.i``

export const UserAdd = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledUserAdd {...props} ref={ref} />
    </>
  )
})
