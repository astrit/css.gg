import React from 'react'
import styled from 'styled-components'

const StyledPhotoscan = styled.i`
  & {
    box-sizing: border-box;
    display: block;
    position: relative;
    transform: scale(var(--ggs, 1));
    border-radius: 2px;
    width: 14px;
    height: 18px;
    border: 2px solid;
    border-bottom: 4px solid;
  }
  &::before {
    content: '';
    position: absolute;
    box-sizing: border-box;
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 20px;
    box-shadow: 0 0 0 2px, inset 0 0 0 2px;
    border: 1px solid transparent;
  }
`

export const Photoscan = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledPhotoscan {...props} ref={ref} />
    </>
  )
})
