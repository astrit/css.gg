import React from 'react'
import styled from 'styled-components'

const StyledThermometer = styled.i``

export const Thermometer = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledThermometer {...props} ref={ref} />
    </>
  )
})
