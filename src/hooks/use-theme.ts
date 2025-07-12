"use client"

import { useState, useEffect, useCallback } from "react"

export function useTheme() {
  const [appTheme, setAppThemeState] = useState("theme-indigo")

  useEffect(() => {
    const storedTheme = localStorage.getItem("app-theme") || "theme-indigo"
    setAppThemeState(storedTheme)
    document.body.classList.add(storedTheme)
  }, [])

  const setAppTheme = useCallback((theme: string) => {
    const currentTheme = localStorage.getItem("app-theme")
    if (currentTheme) {
      document.body.classList.remove(currentTheme)
    }
    localStorage.setItem("app-theme", theme)
    setAppThemeState(theme)
    document.body.classList.add(theme)
  }, [])

  return { appTheme, setAppTheme }
}
