import React from 'react'
import styled from 'styled-components'

const StyledUserRemove = styled.i``

export const UserRemove = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledUserRemove {...props} ref={ref} />
    </>
  )
})
