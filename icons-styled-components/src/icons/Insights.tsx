import React from 'react'
import styled from 'styled-components'

const StyledInsights = styled.i``

export const Insights = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledInsights {...props} ref={ref} />
    </>
  )
})
