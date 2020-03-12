import React from 'react'
import styled from 'styled-components'

const StyledSmartHomeBoiler = styled.i``

export const SmartHomeBoiler = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSmartHomeBoiler {...props} ref={ref} />
    </>
  )
})
