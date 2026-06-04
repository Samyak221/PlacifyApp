'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { 
  BookOpen, 
  Code2, 
  Users, 
  FileText, 
  Building2, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react'

const menuItems = [
  { 
    name: 'Dashboard', 
    href: '/dashboard', 
    icon: Building2 
  },
  { 
    name: 'Aptitude', 
    href: '/dashboard/aptitude', 
    icon: BookOpen 
  },
  { 
    name: 'Coding Arena', 
    href: '/dashboard/coding', 
    icon: Code2 
  },
  { 
    name: 'Community', 
    href: '/dashboard/community', 
    icon: Users 
  },
  { 
    name: 'Resume Analyser', 
    href: '/dashboard/resume-analyser', 
    icon: FileText 
  },
  { 
    name: 'Resume Builder', 
    href: '/dashboard/resume-builder', 
    icon: FileText 
  },
]

interface SidebarProps {
  open: boolean
  onToggle: () => void
}

export function Sidebar({ open, onToggle }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed md:relative w-64 h-screen bg-sidebar/90 backdrop-blur-xl border-r border-sidebar-border transition-transform duration-300 z-50',
          'flex flex-col overflow-y-auto',
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-border/50">
          <Link href="/dashboard" className="brand-gradient-text text-xl font-bold">
            Placify
          </Link>
          <button
            onClick={onToggle}
            className="md:hidden text-muted-foreground hover:text-foreground"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                  'text-sm font-medium',
                  isActive
                    ? 'border border-primary/30 bg-primary/15 text-primary shadow-sm'
                    : 'text-muted-foreground hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground'
                )}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-border/50 p-4 space-y-2">
          <Link
            href="/dashboard/profile"
            className={cn(
              'flex items-center gap-3 px-4 py-3 rounded-lg transition-all',
              'text-sm font-medium text-muted-foreground hover:text-foreground'
            )}
          >
            <Settings size={18} />
            Settings
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition-all">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  )
}
