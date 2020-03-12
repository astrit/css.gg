import React from 'react'
import styled from 'styled-components'

const StyledEthernet = styled.i``

export const Ethernet = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledEthernet {...props} ref={ref} />
    </>
  )
})
