'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ThemeToggle } from '@/components/theme-toggle'
import { ArrowRight, Check } from 'lucide-react'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
          <h1 className="text-2xl font-bold">Create Account</h1>
          <p className="text-muted-foreground">Start your interview preparation journey</p>
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

          <div>
            <label className="block text-sm font-medium mb-2">Confirm Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Requirements */}
          <div className="bg-card/50 border border-border/30 rounded-lg p-4 space-y-2 text-sm">
            <p className="font-medium">Password must contain:</p>
            {[
              { text: 'At least 8 characters', met: password.length >= 8 },
              { text: 'One uppercase letter', met: /[A-Z]/.test(password) },
              { text: 'One number', met: /\d/.test(password) },
            ].map((req, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                  req.met ? 'bg-green-500/20 text-green-400' : 'bg-border/50'
                }`}>
                  {req.met && <Check size={12} />}
                </div>
                <span className={req.met ? 'text-foreground' : 'text-muted-foreground'}>
                  {req.text}
                </span>
              </div>
            ))}
          </div>

          <label className="flex items-center gap-2 cursor-pointer text-sm">
            <input type="checkbox" className="w-4 h-4 rounded" />
            I agree to the Terms of Service and Privacy Policy
          </label>

          <Button
            className="w-full h-11 bg-primary text-primary-foreground font-medium hover:bg-primary/90"
            onClick={() => {
              // Mock signup
              window.location.href = '/dashboard'
            }}
          >
            Create Account
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>

        {/* OAuth */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/30" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-background text-muted-foreground">Or sign up with</span>
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

        {/* Sign In Link */}
        <div className="text-center text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-primary font-semibold hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}
