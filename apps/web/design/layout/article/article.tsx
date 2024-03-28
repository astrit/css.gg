import React, { ReactNode } from "react"

import "&/article/article.css"

interface ArticleProps {
  children: ReactNode
}

const Article = ({ children, ...rest }: ArticleProps) => {
  return (
    <article className="layout article" {...rest}>
      {children}
    </article>
  )
}
export default Article
