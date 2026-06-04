'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ThemeToggle } from '@/components/theme-toggle'
import { ArrowRight } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent px-6 py-10">
      <div className="absolute right-6 top-6">
        <ThemeToggle />
      </div>
      <div className="glass-panel w-full max-w-md space-y-8 rounded-2xl p-8">
        {/* Logo */}
        <div className="text-center space-y-2">
          <Link href="/" className="brand-gradient-text block text-2xl font-bold">
            Placify
          </Link>
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your account to continue</p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" />
              Remember me
            </label>
            <a href="#" className="text-primary hover:underline">Forgot password?</a>
          </div>

          <Button
            className="w-full h-11 bg-primary text-primary-foreground font-medium hover:bg-primary/90"
            onClick={() => {
              // Mock login
              window.location.href = '/dashboard'
            }}
          >
            Sign In
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>

        {/* OAuth */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/30" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="h-11 border border-border/50 rounded-lg hover:bg-card/50 transition font-medium">
            Google
          </button>
          <button className="h-11 border border-border/50 rounded-lg hover:bg-card/50 transition font-medium">
            GitHub
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-primary font-semibold hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
