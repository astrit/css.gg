import React from 'react'
import styled from 'styled-components'

const StyledNametag = styled.i``

export const Nametag = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledNametag {...props} ref={ref} />
    </>
  )
})
