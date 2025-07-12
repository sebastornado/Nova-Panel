
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/context/language-context';

export const metadata: Metadata = {
  title: 'NovaPanel',
  description: 'The modern SaaS dashboard.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="font-body antialiased" suppressHydrationWarning>
        <LanguageProvider>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="indigo"
            themes={['light', 'dark', 'indigo', 'rose', 'blue', 'green', 'orange']}
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
