'use client'

import Link from 'next/link'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import { BookOpen, Code2, Users, FileText, ArrowRight, Trophy, Zap, Clock } from 'lucide-react'

const performanceData = [
  { name: 'Mon', score: 65 },
  { name: 'Tue', score: 72 },
  { name: 'Wed', score: 68 },
  { name: 'Thu', score: 85 },
  { name: 'Fri', score: 90 },
  { name: 'Sat', score: 88 },
  { name: 'Sun', score: 92 },
]

const streakData = [
  { name: 'Week 1', days: 5 },
  { name: 'Week 2', days: 6 },
  { name: 'Week 3', days: 7 },
  { name: 'Week 4', days: 4 },
]

const activities = [
  { type: 'Aptitude', title: 'Completed Logical Reasoning Quiz', time: '2 hours ago', icon: BookOpen },
  { type: 'Coding', title: 'Solved Two Sum Problem', time: '5 hours ago', icon: Code2 },
  { type: 'Resume', title: 'Updated Resume v2', time: '1 day ago', icon: FileText },
  { type: 'Community', title: 'Reached Rank 128', time: '3 days ago', icon: Trophy },
]

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-8">
      {/* Welcome Banner */}
      <div className="brand-gradient-surface space-y-4 rounded-xl border border-primary/25 p-8 shadow-lg shadow-primary/10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Welcome back, User! 👋</h1>
          <p className="text-muted-foreground">Keep up your 7-day streak and master your interviews</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/dashboard/aptitude" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium">
            Continue Learning
            <ArrowRight size={18} />
          </Link>
          <button className="px-6 py-3 border border-border/50 rounded-lg hover:bg-card/50 transition font-medium">
            View Progress
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Current Streak', value: '7', subtext: 'days', icon: Zap, color: 'text-orange-400' },
          { label: 'Questions Solved', value: '142', subtext: 'total', icon: BookOpen, color: 'text-[var(--brand-start)]' },
          { label: 'Coding Problems', value: '34', subtext: 'completed', icon: Code2, color: 'text-[var(--brand-end)]' },
          { label: 'Leaderboard Rank', value: '128', subtext: 'global', icon: Trophy, color: 'text-yellow-400' },
        ].map((stat, i) => {
          const Icon = stat.icon
          return (
            <div key={i} className="glass-panel space-y-3 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                <Icon className={`${stat.color}`} size={20} />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.subtext}</div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <div className="glass-panel space-y-4 rounded-lg p-6">
          <h2 className="text-lg font-semibold">Weekly Performance</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(100,100,150,0.1)" />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" />
              <YAxis stroke="rgba(255,255,255,0.3)" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1a1a25', border: '1px solid rgba(100,100,150,0.3)' }}
                cursor={{ stroke: 'rgba(139,92,246,0.3)' }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#8b5cf6"
                strokeWidth={2}
                dot={{ fill: '#8b5cf6', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Streak Chart */}
        <div className="glass-panel space-y-4 rounded-lg p-6">
          <h2 className="text-lg font-semibold">Practice Streak</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={streakData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(100,100,150,0.1)" />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" />
              <YAxis stroke="rgba(255,255,255,0.3)" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1a25', border: '1px solid rgba(100,100,150,0.3)' }}
              />
              <Bar dataKey="days" fill="#06b6d4" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { 
            title: 'Aptitude Tests',
            description: 'Practice reasoning & quantitative',
            href: '/dashboard/aptitude',
            icon: BookOpen,
            color: 'from-violet-500/15 to-fuchsia-500/10'
          },
          {
            title: 'Coding Arena',
            description: 'Solve programming problems',
            href: '/dashboard/coding',
            icon: Code2,
            color: 'from-cyan-500/15 to-sky-500/10'
          },
          {
            title: 'Community',
            description: 'Connect with candidates',
            href: '/dashboard/community',
            icon: Users,
            color: 'from-indigo-500/15 to-blue-500/10'
          },
          {
            title: 'Resume Tools',
            description: 'Build & analyze resumes',
            href: '/dashboard/resume-analyser',
            icon: FileText,
            color: 'from-amber-500/15 to-rose-500/10'
          },
        ].map((action, i) => {
          const Icon = action.icon
          return (
            <Link
              key={i}
              href={action.href}
              className={`group space-y-4 rounded-lg border border-border/50 bg-gradient-to-br ${action.color} p-6 shadow-sm transition hover:border-primary/50`}
            >
              <Icon className="text-primary group-hover:scale-110 transition" size={24} />
              <div className="space-y-1">
                <h3 className="font-semibold group-hover:text-primary transition">{action.title}</h3>
                <p className="text-sm text-muted-foreground">{action.description}</p>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Activity Feed */}
      <div className="glass-panel space-y-4 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <a href="#" className="text-sm text-primary hover:underline">View all</a>
        </div>
        <div className="space-y-3">
          {activities.map((activity, i) => {
            const Icon = activity.icon
            return (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-card/50 transition border border-transparent hover:border-border/50">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Icon size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.type}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
