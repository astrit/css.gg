import React from 'react'
import styled from 'styled-components'

const StyledClapperBoard = styled.i``

export const ClapperBoard = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledClapperBoard {...props} ref={ref} />
    </>
  )
})
