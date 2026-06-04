'use client'

import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { ArrowRight, Sparkles, BookOpen, Code2, Users, BarChart3 } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 h-16 border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <div className="brand-gradient-text text-xl font-bold">
            Placify
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition">Features</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition">Pricing</a>
            <Link href="/login" className="px-4 py-2 rounded-lg bg-card/50 border border-border/30 hover:border-border transition">
              Login
            </Link>
            <ThemeToggle />
            <Link href="/signup" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="flex items-center gap-2">
                <Sparkles size={14} />
                AI-Powered Interview Prep
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-balance">
              Master Your <span className="brand-gradient-text">Interview</span> with AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Practice aptitude tests, solve coding challenges, build your resume, and get AI-powered feedback. All in one platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition">
              Start Free
              <ArrowRight size={18} />
            </Link>
            <button className="px-8 py-3 rounded-lg border border-border/50 hover:bg-card/50 transition font-medium">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 pt-16 border-t border-border/30">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="space-y-2">
                <div className="text-3xl font-bold text-[var(--brand-end)]">500+</div>
              <div className="text-sm text-muted-foreground">Questions</div>
            </div>
            <div className="space-y-2">
                <div className="text-3xl font-bold text-[var(--brand-start)]">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 border-t border-border/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Everything You Need</h2>
            <p className="text-muted-foreground text-lg">Comprehensive interview preparation tools</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: BookOpen,
                title: 'Aptitude Tests',
                description: 'Practice quantitative, logical, and verbal reasoning questions with detailed explanations.'
              },
              {
                icon: Code2,
                title: 'Coding Arena',
                description: 'Solve real coding problems in multiple languages with test cases and instant feedback.'
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Connect with thousands of candidates, track progress, and climb the leaderboard.'
              },
              {
                icon: BarChart3,
                title: 'Resume Analysis',
                description: 'Get AI-powered analysis of your resume with ATS score and improvement suggestions.'
              },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={i}
                  className="glass-panel space-y-4 rounded-xl p-6 transition hover:border-primary/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <Icon size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="brand-gradient-surface mx-auto max-w-2xl space-y-6 rounded-2xl border border-primary/25 p-12 text-center shadow-lg shadow-primary/10">
          <h2 className="text-3xl font-bold">Ready to ace your interviews?</h2>
          <p className="text-muted-foreground">Join thousands of successful candidates who landed their dream jobs.</p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition">
            Get Started Free
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
