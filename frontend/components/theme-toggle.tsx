'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === 'dark' : false

  return (
    <Button
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative overflow-hidden border-border/60 bg-background/70 shadow-sm backdrop-blur hover:bg-accent"
      size="icon"
      type="button"
      variant="outline"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <Sun className="size-4 rotate-0 scale-100 text-amber-500 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-4 rotate-90 scale-0 text-cyan-300 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
