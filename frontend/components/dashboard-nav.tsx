'use client'

import { Bell, Menu, Search } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

interface DashboardNavProps {
  onMenuClick: () => void
}

export function DashboardNav({ onMenuClick }: DashboardNavProps) {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="flex items-center justify-between h-full px-6">
        <button
          onClick={onMenuClick}
          className="md:hidden text-muted-foreground hover:text-foreground transition"
        >
          <Menu size={24} />
        </button>

        <div className="mx-6 hidden flex-1 items-center gap-2 rounded-lg border border-border/60 bg-card/60 px-4 shadow-sm md:flex">
          <Search size={18} className="text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent py-2 text-sm outline-none text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="text-muted-foreground hover:text-foreground transition">
            <Bell size={20} />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand-start)] to-[var(--brand-end)] font-semibold text-white shadow-sm">
            U
          </button>
        </div>
      </div>
    </header>
  )
}
