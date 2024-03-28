import { defineDocumentType } from "contentlayer/source-files"
import GithubSlugger from "github-slugger"

import { formatShortDate } from "../date"
import { getLastEditedDate, urlFromFilePath } from "../utils"
import { Series } from "./Series"
import { Tag } from "./Tag"

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string" },
    status: { type: "enum", options: ["draft", "published"], required: true },
    series: {
      type: "nested",
      of: Series,
    },
    tags: {
      type: "list",
      of: Tag,
    },
  },
  computedFields: {
    headings: {
      type: "json",
      resolve: async (doc) => {
        // const slugger = new GithubSlugger()
        const regXHeader = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g
        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag
            const content = groups?.content
            return {
              heading: flag?.length,
              text: content,
              // slug: content ? slugger.slug(content) : undefined,
            }
          }
        )

        return headings
      },
    },
    publishedAtFormatted: {
      type: "string",
      resolve: (doc) => {
        return formatShortDate(doc.publishedAt)
      },
    },
    last_edited: { type: "date", resolve: getLastEditedDate },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}))
