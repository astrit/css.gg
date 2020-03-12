import React from 'react'
import styled from 'styled-components'

const StyledFolderRemove = styled.i`
  & {
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
    border-radius: 3px;
  }
  &::before {
    background: currentColor;
    left: 5px;
    width: 8px;
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

export const FolderRemove = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledFolderRemove {...props} ref={ref} />
    </>
  )
})
