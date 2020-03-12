import React from 'react'
import styled from 'styled-components'

const StyledTab = styled.i``

export const Tab = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTab {...props} ref={ref} />
    </>
  )
})
