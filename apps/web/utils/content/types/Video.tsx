import { defineDocumentType, defineNestedType } from "contentlayer/source-files"
import GithubSlugger from "github-slugger"

import { formatShortDate } from "../date"
import { getVideoDetails } from "../layer"
import { Tag } from "./Tag"

export const Video = defineDocumentType(() => ({
  name: "Video",
  filePathPattern: "video/*.mdx",
  contentType: "mdx",
  fields: {
    tags: {
      type: "list",
      of: Tag,
    },
    title: {
      type: "string",
      description: "Override the default Youtube title",
    },
    description: { type: "string", required: true },
  },
  computedFields: {
    youtube: {
      type: "nested",
      // doesn't generate types yet https://github.com/contentlayerdev/contentlayer/issues/149
      of: defineNestedType(() => ({
        name: "YoutubeVideo",
        fields: {
          id: {
            type: "string",
            required: true,
          },
          title: {
            type: "string",
            required: true,
          },
          views: {
            type: "string",
            required: true,
          },
          thumbnail: {
            type: "string",
            required: true,
          },
          url: {
            type: "string",
            required: true,
          },
          duration: {
            type: "string",
            required: true,
          },
          publishedAt: {
            type: "string",
            required: true,
          },
        },
      })),
      resolve: async (doc) => {
        const id = doc._raw.sourceFileName.replace(/\.mdx$/, "")

        const data = await getVideoDetails(id)

        return {
          id,
          url: `https://www.youtube.com/watch?v=${id}`,
          // publishedAtFormatted: formatShortDate(data.publishedAt),
          ...data,
        }
      },
    },
  },
}))
