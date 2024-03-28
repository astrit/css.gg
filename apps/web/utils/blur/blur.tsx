export async function blur(url: any) {
  const base64str = await fetch(
    `/_next/image?url=/video/${url}&w=16&q=75`
  ).then(async (res) => Buffer.from(await res.arrayBuffer()).toString("base64"))

  const blurSvg = `
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
      <filter id='b' color-interpolation-filters='sRGB'>
          <feGaussianBlur stdDeviation='0.1' />
      </filter>
      <image preserveAspectRatio='none' filter='url(#b)' x='0' y='0' height='100%' width='100%'
      href='data:image/avif;base64,${base64str}' />
  </svg>
  `

  const toBase64 = (
    str: string | ArrayBuffer | { valueOf(): ArrayBuffer | SharedArrayBuffer }
  ) =>
    typeof window === "undefined"
      ? Buffer.from(String(str)).toString("base64")
      : window.btoa(typeof str === "string" ? str : String(str))

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`
}
