import React from 'react'
import styled from 'styled-components'

const StyledArrowsMergeAltH = styled.i``

export const ArrowsMergeAltH = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsMergeAltH {...props} ref={ref} />
    </>
  )
})
