import React from 'react'
import styled from 'styled-components'

const StyledAttachment = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 14px;
    height: 14px;
    border: 2px solid;
    border-top: 0;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    transform: scale(var(--ggs, 1));
    margin-top: 11px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    border: 2px solid;
  }
  &::after {
    border-bottom: 0;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    right: -2px;
    width: 10px;
    height: 14px;
    bottom: 8px;
  }
  &::before {
    width: 6px;
    height: 12px;
    border-top: 0;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    left: 2px;
    bottom: 4px;
  }
`

export const Attachment = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledAttachment {...props} ref={ref} />
    </>
  )
})
