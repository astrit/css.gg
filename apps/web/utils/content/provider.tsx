"use client"

import React, { createContext, useState } from "react"
import Json from "~/data.json"

interface Page {
  [x: string]: any
}

interface Data {
  pages: Page[]
}

interface DataContextValue {
  data: Data | null
  setData: React.Dispatch<React.SetStateAction<Data | null>>
}

export const DataContext = createContext<DataContextValue>({
  data: null,
  setData: () => {},
})

export function Data({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Data | null>(Json as Data)

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}
