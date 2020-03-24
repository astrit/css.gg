import React from 'react'
import styled from 'styled-components'

const {{ styledname }} = styled.i`
  {{{ css }}}
` 

export const {{ name }} = React.forwardRef<HTMLElement, React.AllHTMLAttributes<HTMLElement>>((props, ref) => {
  return (
    <>
      <{{ styledname }} {...props} ref={ref} />
    </>
  )
})
