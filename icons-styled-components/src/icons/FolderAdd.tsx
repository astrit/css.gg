import React from 'react'
import styled from 'styled-components'

const StyledFolderAdd = styled.i`
  & {
    background: linear-gradient(to left, currentColor 10px, transparent 0) no-repeat center
      center/2px 6px;
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 16px;
    border: 2px solid;
    border-radius: 3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    background: currentColor;
    left: 6px;
    width: 6px;
    height: 2px;
    top: 5px;
  }
  &::after {
    width: 10px;
    height: 4px;
    border: 2px solid;
    border-bottom: 0;
    border-top-left-radius: 2px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    top: -5px;
  }
`

export const FolderAdd = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFolderAdd {...props} ref={ref} />
    </>
  )
})
