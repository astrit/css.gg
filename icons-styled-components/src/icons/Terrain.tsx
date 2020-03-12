import React from 'react'
import styled from 'styled-components'

const StyledTerrain = styled.i``

export const Terrain = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledTerrain {...props} ref={ref} />
    </>
  )
})
