
"use client"

import { useState, useEffect, useCallback } from "react"

export function useTheme() {
  const [appTheme, setAppThemeState] = useState("theme-indigo")

  // Load theme from localStorage on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem("app-theme") || "theme-indigo"
    setAppThemeState(storedTheme)
  }, [])

  const setAppTheme = useCallback((theme: string) => {
    setAppThemeState(theme)
    localStorage.setItem("app-theme", theme)
  }, [])

  return { appTheme, setAppTheme }
}
