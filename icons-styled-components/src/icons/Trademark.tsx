import React from 'react'
import styled from 'styled-components'

const StyledTrademark = styled.i``

export const Trademark = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTrademark {...props} ref={ref} />
    </>
  )
})
