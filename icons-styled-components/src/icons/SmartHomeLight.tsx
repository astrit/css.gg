import React from 'react'
import styled from 'styled-components'

const StyledSmartHomeLight = styled.i``

export const SmartHomeLight = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSmartHomeLight {...props} ref={ref} />
    </>
  )
})
