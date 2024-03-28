import { type Options } from "rehype-pretty-code"
import { visit } from "unist-util-visit"

// div.BLOCK > pre.PRE > code.CODE
const BLOCK = "code-block"
const TITLE = "code-title"
const PRE = "code-pre"
const CODE = "code-block"
const INLINE_BLOCK = "code-inline-block"
const INLINE_CODE = "code-inline"
const NUMBERED_LINES = "code-numbered-lines"
const HIGHLIGHTED_LINE = "code-highlighted-line"

export function rehypePrettyCodeClasses() {
  return (tree: any) => {
    visit(
      tree,
      (node: any) =>
        Boolean(
          node.tagName === "code" &&
            Object.keys(node.properties).length === 0 &&
            node.children.some((n: any) => n.type === "text")
        ),
      (node: any) => {
        const textNode = node.children.find((n: any) => n.type === "text")
        textNode.type = "element"
        textNode.tagName = "code"
        textNode.properties = { className: [INLINE_CODE] }
        textNode.children = [{ type: "text", value: textNode.value }]
        node.properties.className = [INLINE_BLOCK]
        node.tagName = "span"
      }
    )

    visit(
      tree,
      (node: any) =>
        Boolean(
          typeof node?.properties?.["data-rehype-pretty-code-fragment"] !==
            "undefined"
        ),
      (node: any) => {
        if (node.tagName === "span") {
          node.properties.className = [
            ...(node.properties.className || []),
            INLINE_BLOCK,
          ]
          node.children[0].properties.className = [
            ...(node.children[0].properties.className || []),
            INLINE_CODE,
          ]
          console.log("node.children", node)
          return node
        }

        if (node.tagName === "div") {
          node.properties.className = [
            ...(node.properties.className || []),
            BLOCK,
          ]
          node.children = node.children.map((node: any) => {
            if (
              node.tagName === "div" &&
              typeof node.properties?.["data-rehype-pretty-code-title"] !==
                "undefined"
            ) {
              node.properties.className = [
                ...(node.properties.className || []),
                TITLE,
                console.log("node.children", node),
              ]

              // EPERIMENTAL DELETE TITLE
              // EPERIMENTAL DELETE TITLE
              // EPERIMENTAL DELETE TITLE
              // EPERIMENTAL DELETE TITLE
              // EPERIMENTAL DELETE TITLE
              // delete node.properties["data-rehype-pretty-code-title"]
              console.log("node.children", node)
            }
            if (node.tagName === "pre") {
              node.properties.className = [PRE]
              if (node.children[0].tagName === "code") {
                node.children[0].properties.className = [
                  ...(node.children[0].properties.className || []),
                  CODE,
                ]
                if (
                  typeof node.children[0].properties["data-line-numbers"] !==
                  "undefined"
                ) {
                  node.children[0].properties.className.push(NUMBERED_LINES)
                }
              }

              console.log("node.children", node.children)
            }
            console.log("node.children", node)
            return node
          })
          console.log("node.children", node)
          return node
        }
      }
    )

    // visit(
    //   tree,
    //   (node: any) =>
    //     Boolean(
    //       node.tagName === "code" &&
    //         node.children.length > 0 &&
    //         node.children[0].tagName === "span"
    //     ),
    //   (node: any) => {
    //     const rawCode = node.children
    //       .map((spanNode: any) =>
    //         spanNode.children.map((n: any) => n.value.text).join("")
    //       )
    //       .join("\n")
    //     node.properties.raw = rawCode
    //   }
    // )

    function extractText(node: any): string {
      if (node.value) {
        return node.value
      }
      return node.children.map(extractText).join("")
    }

    visit(
      tree,
      (node: any) =>
        Boolean(
          node.tagName === "code" &&
            node.children.length > 0 &&
            node.children[0].tagName === "span"
        ),
      (node: any) => {
        const rawCode = node.children.map(extractText).join("\n")
        node.properties.raw = rawCode
      }
    )

    // real deal workign example
    // real deal workign example
    // real deal workign example
    // real deal workign example
    // real deal workign example
    // real deal workign example
    // real deal workign example
    // real deal workign example

    visit(
      tree,
      (node: any) =>
        Boolean(
          node.tagName === "figure" &&
            node.children.length > 0 &&
            node.children[0].tagName === "div"
        ),
      (node: any) => {
        // Extract value from the div
        const divValue = node.children[0].children[0].value

        // Delete the div
        node.children.shift()

        // Find the pre tag
        const preNode = node.children.find(
          (child: any) => child.tagName === "pre"
        )

        if (preNode) {
          // Assign the value to the pre tag
          preNode.properties["data-rehype-pretty-code-title"] = divValue
        }

        // console.log("node.children", node)
      }
    )
  }
}

// if (node?.type === "element" && node?.tagName === "pre") {
//   const [codeEl] = node.children;

//   if (codeEl.tagName !== "code") return;

//   node.raw = codeEl.children?.[0].value;
// }

export const rehypePrettyCodeOptions: Partial<Options> = {
  theme: {
    dark: "github-dark-dimmed",
    light: "github-light",
  },
  keepBackground: false,
  tokensMap: {
    // VScode command palette: Inspect Editor Tokens and Scopes
    // https://github.com/Binaryify/OneDark-Pro/blob/47c66a2f2d3e5c85490e1aaad96f5fab3293b091/themes/OneDark-Pro.json
    fn: "entity.name.function",
    objKey: "meta.object-literal.key",
  },
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }]
    }
    node.properties.className = node.properties.className || [] // Initialize className as an empty array if it's undefined
  },
  onVisitHighlightedLine(node) {
    node.properties.className = node.properties.className || [] // Initialize className as an empty array if it's undefined
    node.properties.className.push(HIGHLIGHTED_LINE)
  },
}
