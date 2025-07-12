
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"
import { useTheme as useAppTheme } from "@/hooks/use-theme"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { appTheme } = useAppTheme()

  React.useEffect(() => {
    const body = document.body
    const themes = ["theme-indigo", "theme-rose", "theme-blue", "theme-green", "theme-orange"]
    themes.forEach((theme) => body.classList.remove(theme))
    body.classList.add(appTheme)
  }, [appTheme])
  
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
