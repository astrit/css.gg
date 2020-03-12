import React from 'react'
import styled from 'styled-components'

const StyledEditStraight = styled.i``

export const EditStraight = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledEditStraight {...props} ref={ref} />
    </>
  )
})
