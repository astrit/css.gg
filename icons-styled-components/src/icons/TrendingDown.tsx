import React from 'react'
import styled from 'styled-components'

const StyledTrendingDown = styled.i``

export const TrendingDown = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTrendingDown {...props} ref={ref} />
    </>
  )
})
