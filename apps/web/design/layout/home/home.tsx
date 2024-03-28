import React, { ReactNode } from "react"

import "&/home/home.css"

interface HomeProps {
  children: ReactNode
}

const Home = ({ children, ...rest }: HomeProps) => {
  return (
    <div className="layout home" {...rest}>
      {children}
    </div>
  )
}
export default Home
