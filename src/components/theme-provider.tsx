"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"
import { useTheme as useAppTheme } from "@/hooks/use-theme"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { appTheme } = useAppTheme()
  React.useEffect(() => {
    document.body.className = ""
    document.body.classList.add(appTheme, 'font-body', 'antialiased')
  }, [appTheme])
  
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
