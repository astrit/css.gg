import { defineNestedType } from "contentlayer/source-files"

import { allTagNames, allTagSlugs } from "../layer"

export const Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    title: {
      type: "enum",
      required: true,
      options: allTagNames,
    },
    slug: {
      type: "enum",
      required: true,
      options: allTagSlugs,
    },
  },
}))
