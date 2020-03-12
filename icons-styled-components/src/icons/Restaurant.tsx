import React from 'react'
import styled from 'styled-components'

const StyledRestaurant = styled.i``

export const Restaurant = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledRestaurant {...props} ref={ref} />
    </>
  )
})
