import React from 'react'
import styled from 'styled-components'

const StyledPlayListSearch = styled.i``

export const PlayListSearch = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPlayListSearch {...props} ref={ref} />
    </>
  )
})
