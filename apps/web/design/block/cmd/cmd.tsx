"use client"

import "@/cmd/cmd.css"

import React from "react"
import { Command } from "cmdk"

export function CMD({
  isOpen,
  toggleCmd,
}: {
  isOpen: boolean
  toggleCmd: () => void
}) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [inputValue, setInputValue] = React.useState("")
  // const [open, setOpen] = React.useState(false)
  const [pages, setPages] = React.useState<string[]>(["home"])
  const activePage = pages[pages.length - 1]
  const isHome = activePage === "home"

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e: {
      key: string
      metaKey: any
      ctrlKey: any
      preventDefault: () => void
    }) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        toggleCmd()
        // setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const popPage = React.useCallback(() => {
    setPages((pages) => {
      const x = [...pages]
      x.splice(-1, 1)
      return x
    })
  }, [])

  const onKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (isHome || inputValue.length) {
        return
      }

      if (e.key === "Backspace") {
        e.preventDefault()
        popPage()
      }
    },
    [inputValue.length, isHome, popPage]
  )

  function bounce() {
    if (ref.current) {
      ref.current.style.transform = "scale(0.96)"
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transform = ""
        }
      }, 100)

      setInputValue("")
    }
  }

  const backDrop = ["backdrop", isOpen ? "open" : null].filter(Boolean)

  return (
    <>
      <div className={backDrop.join(" ")}></div>
      <Command.Dialog
        ref={ref}
        open={isOpen}
        onOpenChange={toggleCmd}
        className="dark"
        label="Global Command Menu"
        loop
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === "Enter") {
            bounce()
          }

          if (isHome || inputValue.length) {
            return
          }

          if (e.key === "Backspace") {
            e.preventDefault()
            popPage()
            bounce()
          }
        }}
      >
        <div>
          {pages.map((p) => (
            <div key={p} cmdk-vercel-badge="">
              {p}
            </div>
          ))}
        </div>
        <Command.Input
          autoFocus
          placeholder="What do you need?"
          onValueChange={(value) => {
            setInputValue(value)
          }}
        />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          {activePage === "home" && (
            <Home searchProjects={() => setPages([...pages, "projects"])} />
          )}
          {activePage === "projects" && <Projects />}
        </Command.List>
      </Command.Dialog>
    </>
  )
}

function Home({ searchProjects }: { searchProjects: Function }) {
  return (
    <>
      <Command.Group heading="Projects">
        <Item
          shortcut="S P"
          onSelect={() => {
            searchProjects()
          }}
        >
          Search Projects...
        </Item>
        <Item>Create New Project...</Item>
      </Command.Group>
      <Command.Group heading="Teams">
        <Item shortcut="⇧ P">Search Teams...</Item>
        <Item>Create New Team...</Item>
      </Command.Group>
      <Command.Group heading="Help">
        <Item shortcut="⇧ D">Search Docs...</Item>
        <Item>Send Feedback...</Item>
        <Item>Contact Support</Item>
      </Command.Group>
    </>
  )
}

function Projects() {
  return (
    <>
      <Item>Project 1</Item>
      <Item>Project 2</Item>
      <Item>Project 3</Item>
      <Item>Project 4</Item>
      <Item>Project 5</Item>
      <Item>Project 6</Item>
    </>
  )
}

function Item({
  children,
  shortcut,
  onSelect = () => {},
}: {
  children: React.ReactNode
  shortcut?: string
  onSelect?: (value: string) => void
}) {
  return (
    <Command.Item onSelect={onSelect}>
      {children}
      {shortcut && (
        <div cmdk-vercel-shortcuts="">
          {shortcut.split(" ").map((key) => {
            return <kbd key={key}>{key}</kbd>
          })}
        </div>
      )}
    </Command.Item>
  )
}
