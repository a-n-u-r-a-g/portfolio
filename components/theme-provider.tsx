"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "blue" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  enableSystem?: boolean
  storageKey?: string
  themes?: string[]
  attribute?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  enableSystem = false,
  storageKey = "theme",
  themes = ["dark", "blue"],
  attribute = "class",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement
    const savedTheme = localStorage.getItem(storageKey)

    if (savedTheme && themes.includes(savedTheme)) {
      setTheme(savedTheme as Theme)
      root.classList.remove(...themes)
      root.classList.add(savedTheme)
      root.style.colorScheme = savedTheme === "dark" || savedTheme === "blue" ? "dark" : "light"
    } else {
      setTheme(defaultTheme)
      root.classList.remove(...themes)
      root.classList.add(defaultTheme)
      root.style.colorScheme = defaultTheme === "dark" || defaultTheme === "blue" ? "dark" : "light"
    }
  }, [defaultTheme, storageKey, themes])

  useEffect(() => {
    const root = window.document.documentElement

    // Remove all theme classes
    root.classList.remove(...themes)

    // Add the current theme class
    root.classList.add(theme)

    // Update color-scheme
    root.style.colorScheme = theme === "dark" || theme === "blue" ? "dark" : "light"

    // Save to localStorage
    localStorage.setItem(storageKey, theme)
  }, [theme, themes, storageKey])

  return <ThemeProviderContext.Provider value={{ theme, setTheme }}>{children}</ThemeProviderContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
