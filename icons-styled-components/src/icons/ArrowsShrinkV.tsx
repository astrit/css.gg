import React from 'react'
import styled from 'styled-components'

const StyledArrowsShrinkV = styled.i``

export const ArrowsShrinkV = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsShrinkV {...props} ref={ref} />
    </>
  )
})
