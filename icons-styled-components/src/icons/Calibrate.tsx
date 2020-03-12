import React from 'react'
import styled from 'styled-components'

const StyledCalibrate = styled.i``

export const Calibrate = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCalibrate {...props} ref={ref} />
    </>
  )
})
