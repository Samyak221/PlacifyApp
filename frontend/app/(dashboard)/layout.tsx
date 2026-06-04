'use client'

import { useState } from 'react'
import { DashboardNav } from '@/components/dashboard-nav'
import { Sidebar } from '@/components/sidebar'
import { ChatbotWidget } from '@/components/chatbot-widget'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-transparent">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex-1 flex flex-col">
        <DashboardNav onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
      <ChatbotWidget />
    </div>
  )
}
