import React from 'react'
import styled from 'styled-components'

const StyledTrees = styled.i``

export const Trees = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTrees {...props} ref={ref} />
    </>
  )
})
