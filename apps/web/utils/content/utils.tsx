import * as fs from "node:fs/promises"
import path from "node:path"
import type { DocumentGen } from "contentlayer/core"

export const contentDirPath = "content"

export const urlFromFilePath = (doc: DocumentGen): string => {
  let urlPath = doc._raw.flattenedPath.replace(/^pages\/?/, "/")
  if (!urlPath.startsWith("/")) urlPath = `/${urlPath}`
  urlPath = urlPath
    .split("/")
    .map((segment: string) => segment.replace(/^\d\d\d\-/, ""))
    .filter((segment: string) => segment !== "global_id")
    .join("/")
  return urlPath
}

export const getLastEditedDate = async (doc: DocumentGen): Promise<Date> => {
  const stats = await fs.stat(
    path.join(contentDirPath, doc._raw.sourceFilePath)
  )
  return stats.mtime
}
