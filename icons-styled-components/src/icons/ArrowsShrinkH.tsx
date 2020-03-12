import React from 'react'
import styled from 'styled-components'

const StyledArrowsShrinkH = styled.i``

export const ArrowsShrinkH = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsShrinkH {...props} ref={ref} />
    </>
  )
})
