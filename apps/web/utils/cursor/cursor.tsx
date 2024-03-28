// Classes
export const addClass = (element: HTMLDivElement | null, className: string) => {
  if (element) {
    element.classList.add(className)
  }
}

export const removeClass = (
  element: HTMLDivElement | null,
  className: string
) => {
  if (element) {
    element.classList.remove(className)
  }
}

// Events

export const addEventListener = (
  element: Element,
  event: string,
  handler: EventListenerOrEventListenerObject
) => {
  ;(element as HTMLElement).addEventListener(event, handler)
}

export const removeEventListener = (
  element: Element,
  event: string,
  handler: EventListenerOrEventListenerObject
) => {
  ;(element as HTMLElement).removeEventListener(event, handler)
}

// Props
export const addProps = (element: Element, props: Record<string, string>) => {
  const htmlElement = element as HTMLElement
  Object.entries(props).forEach(([property, value]) => {
    htmlElement.style.setProperty(property, value)
  })
}
// Speficic
export const removeProps = (element: Element, props: string[]) => {
  const htmlElement = element as HTMLElement
  props.forEach((property) => {
    htmlElement.style.removeProperty(property)
  })
}

// All

export const removeAllProps = (element: Element) => {
  const htmlElement = element as HTMLElement
  htmlElement.removeAttribute("style")
}

// get cursor

export const getCursor = (element: Element, docElement?: Element) => {
  return (e: MouseEvent) => {
    const X = e.clientX + "px"
    const Y = e.clientY + "px"

    addProps(element, {
      "--cursor-x": X,
      "--cursor-y": Y,
    })

    if (docElement) {
      addProps(docElement, {
        "--cursor-x": X,
        "--cursor-y": Y,
      })
    }
  }
}

// Play audio

// export const audioPlayTimes = new Map()

// export const playAudio = (element: any) => {
//   const now = Date.now()
//   const lastPlayTime = audioPlayTimes.get(element)

//   // if (!lastPlayTime) {
//   const audio = new Audio("sfx/link.mp3")
//   audio.volume = 0.1
//   audio.play()
//   console.log("audio", audio)

//   audioPlayTimes.set(element, now)
//   // }
// }
