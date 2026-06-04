'use client'

import { useState } from 'react'
import { Trophy, Medal, Award, Flame, Target, TrendingUp } from 'lucide-react'

const leaderboard = [
  { rank: 1, name: 'Alex Chen', score: 2850, streak: 45, badge: '👑', color: 'from-yellow-400 to-orange-400' },
  { rank: 2, name: 'Sarah Johnson', score: 2720, streak: 38, badge: '🥈', color: 'from-gray-300 to-gray-400' },
  { rank: 3, name: 'Mike Wilson', score: 2680, streak: 35, badge: '🥉', color: 'from-orange-300 to-orange-400' },
  { rank: 4, name: 'Emma Davis', score: 2450, streak: 28, badge: '', color: 'from-purple-400 to-cyan-400' },
  { rank: 5, name: 'James Brown', score: 2380, streak: 25, badge: '', color: 'from-indigo-400 to-purple-400' },
  { rank: 6, name: 'Lisa Anderson', score: 2210, streak: 22, badge: '', color: 'from-cyan-400 to-blue-400' },
  { rank: 7, name: 'Tom Martinez', score: 2100, streak: 20, badge: '', color: 'from-green-400 to-emerald-400' },
  { rank: 8, name: 'Nina Patel', score: 2050, streak: 18, badge: '', color: 'from-pink-400 to-rose-400' },
]

const userStats = {
  rank: 128,
  score: 1850,
  streak: 7,
  solved: 34,
  accuracy: 82
}

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'profile'>('leaderboard')

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Community</h1>
        <p className="text-muted-foreground">Connect with top performers and track your ranking</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border/30">
        {[
          { id: 'leaderboard', label: 'Global Leaderboard' },
          { id: 'profile', label: 'Your Stats' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 border-b-2 transition font-medium ${
              activeTab === tab.id
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'leaderboard' ? (
        <div className="space-y-6">
          {/* Top 3 Podium */}
          <div className="grid md:grid-cols-3 gap-4">
            {leaderboard.slice(0, 3).map((user, i) => {
              const heights = ['h-48', 'h-56', 'h-44']
              return (
                <div
                  key={user.rank}
                  className={`rounded-t-2xl bg-gradient-to-b ${user.color} p-6 text-white ${heights[i]} flex flex-col justify-between ${
                    i === 1 ? 'md:scale-105' : ''
                  } transition`}
                >
                  <div className="flex items-start justify-between">
                    <div className="text-4xl">{user.badge}</div>
                    <div className="text-sm font-semibold opacity-80"># {user.rank}</div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{user.name}</h3>
                    <div className="space-y-1 text-sm">
                      <p>Score: {user.score}</p>
                      <p>Streak: {user.streak} days</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Full Leaderboard Table */}
          <div className="rounded-lg bg-card/50 border border-border/30 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/30 bg-card/50">
                    <th className="text-left px-6 py-3 text-sm font-semibold text-muted-foreground">Rank</th>
                    <th className="text-left px-6 py-3 text-sm font-semibold text-muted-foreground">Name</th>
                    <th className="text-right px-6 py-3 text-sm font-semibold text-muted-foreground">Score</th>
                    <th className="text-right px-6 py-3 text-sm font-semibold text-muted-foreground">Streak</th>
                    <th className="text-right px-6 py-3 text-sm font-semibold text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((user, i) => (
                    <tr
                      key={user.rank}
                      className={`border-b border-border/30 hover:bg-card/50 transition ${
                        user.rank <= 3 ? 'bg-primary/5' : ''
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand-start)] to-[var(--brand-end)] text-sm font-bold">
                            {user.badge || user.rank}
                          </div>
                          <span className="font-bold text-lg">#{user.rank}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium">{user.name}</td>
                      <td className="px-6 py-4 text-right font-bold text-primary">{user.score}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-1 text-orange-400">
                          <Flame size={16} />
                          {user.streak}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-primary hover:underline text-sm font-medium">
                          View Profile
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Your Stats */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { label: 'Global Rank', value: userStats.rank, icon: Trophy, color: 'text-yellow-400' },
              { label: 'Total Score', value: userStats.score, icon: Award, color: 'text-[var(--brand-start)]' },
              { label: 'Current Streak', value: userStats.streak, icon: Flame, color: 'text-orange-400' },
              { label: 'Problems Solved', value: userStats.solved, icon: Target, color: 'text-[var(--brand-end)]' },
              { label: 'Accuracy', value: `${userStats.accuracy}%`, icon: TrendingUp, color: 'text-green-400' },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} className="glass-panel space-y-4 rounded-lg p-6">
                  <Icon className={`${stat.color}`} size={24} />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Activity Heatmap */}
          <div className="rounded-lg bg-card/50 border border-border/30 p-6 space-y-4">
            <h2 className="text-lg font-semibold">Activity Heatmap</h2>
            <div className="space-y-2">
              <div className="text-xs text-muted-foreground">Last 4 weeks</div>
              <div className="grid gap-2">
                {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((week, i) => (
                  <div key={week} className="flex items-center gap-2">
                    <span className="text-xs w-12 text-muted-foreground">{week}</span>
                    <div className="flex gap-1 flex-1">
                      {Array(7).fill(0).map((_, j) => {
                        const intensity = Math.floor(Math.random() * 5)
                        const colors = [
                          'bg-border/30',
                          'bg-green-500/30',
                          'bg-green-500/50',
                          'bg-green-500/70',
                          'bg-green-500'
                        ]
                        return (
                          <div
                            key={j}
                            className={`w-6 h-6 rounded ${colors[intensity]} cursor-pointer hover:ring-2 hover:ring-primary`}
                            title={`${Math.random() > 0.3 ? 'Yes' : 'No'}`}
                          />
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="rounded-lg bg-card/50 border border-border/30 p-6 space-y-4">
            <h2 className="text-lg font-semibold">Achievements</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { name: 'First Steps', icon: '👶', description: 'Solve first problem' },
                { name: '7-Day Streak', icon: '🔥', description: 'Practice 7 days straight' },
                { name: 'Speed Racer', icon: '⚡', description: 'Solve 10 problems in one day' },
                { name: 'Top 100', icon: '🌟', description: 'Reach top 100 leaderboard' },
                { name: 'Century Club', icon: '💯', description: 'Solve 100+ problems' },
                { name: 'Accuracy Master', icon: '🎯', description: 'Achieve 90% accuracy' },
              ].map((achievement, i) => (
                <div key={i} className="rounded-lg bg-card/30 border border-border/30 p-4 text-center space-y-2 hover:border-primary/50 transition cursor-pointer">
                  <div className="text-4xl">{achievement.icon}</div>
                  <h3 className="font-semibold text-sm">{achievement.name}</h3>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
