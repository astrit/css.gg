import React from 'react'
import styled from 'styled-components'

const StyledArrowsMergeAltV = styled.i``

export const ArrowsMergeAltV = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsMergeAltV {...props} ref={ref} />
    </>
  )
})
