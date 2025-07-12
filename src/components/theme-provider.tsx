
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"
import { useTheme as useAppTheme } from "@/hooks/use-theme"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { appTheme } = useAppTheme()

  React.useEffect(() => {
    const body = document.body
    // Get all theme classes currently on the body
    const existingThemes = Array.from(body.classList).filter(c => c.startsWith('theme-'));
    // Remove all of them
    body.classList.remove(...existingThemes);
    // Add the new one
    body.classList.add(appTheme);
  }, [appTheme])
  
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
