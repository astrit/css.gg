import React from 'react'
import styled from 'styled-components'

const StyledHashtag = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 8px;
    height: 16px;
    border-left: 2px solid;
    border-right: 2px solid;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 16px;
    height: 8px;
    border-top: 2px solid;
    border-bottom: 2px solid;
    left: -6px;
    top: 4px;
  }
`

export const Hashtag = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledHashtag {...props} ref={ref} />
    </>
  )
})
