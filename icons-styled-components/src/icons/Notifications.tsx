import React from 'react'
import styled from 'styled-components'

const StyledNotifications = styled.i``

export const Notifications = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledNotifications {...props} ref={ref} />
    </>
  )
})
