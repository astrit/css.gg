import React from 'react'
import styled from 'styled-components'

const StyledBanks = styled.i``

export const Banks = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBanks {...props} ref={ref} />
    </>
  )
})
