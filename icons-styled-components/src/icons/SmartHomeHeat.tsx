import React from 'react'
import styled from 'styled-components'

const StyledSmartHomeHeat = styled.i``

export const SmartHomeHeat = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSmartHomeHeat {...props} ref={ref} />
    </>
  )
})
