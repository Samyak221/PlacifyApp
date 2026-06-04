'use client'

import { useState } from 'react'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return children
  }

  return null
}
