'use client'

import { useState } from 'react'
import { Bell, Lock, Moon, LogOut, ChevronRight, Award, Calendar } from 'lucide-react'

type Tab = 'profile' | 'preferences' | 'notifications' | 'security'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<Tab>('profile')
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Full-stack developer interested in AI and scalable systems',
    location: 'San Francisco, CA',
    joinDate: 'January 2024'
  })

  const [preferences, setPreferences] = useState({
    darkMode: true,
    emailNotifications: true,
    weeklyDigest: true,
    achievements: true
  })

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border/30 overflow-x-auto">
        {[
          { id: 'profile', label: 'Profile', icon: '👤' },
          { id: 'preferences', label: 'Preferences', icon: '⚙️' },
          { id: 'notifications', label: 'Notifications', icon: '🔔' },
          { id: 'security', label: 'Security', icon: '🔒' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as Tab)}
            className={`px-4 py-2 border-b-2 transition font-medium whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-2xl">
        {activeTab === 'profile' && (
          <div className="space-y-6">
            {/* Avatar */}
            <div className="rounded-lg bg-card/50 border border-border/30 p-6 space-y-4">
              <h2 className="text-lg font-semibold">Avatar</h2>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center text-white font-bold text-3xl">
                  JD
                </div>
                <div className="space-y-2">
                  <button className="block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition text-sm font-medium">
                    Upload Photo
                  </button>
                  <button className="block px-4 py-2 border border-border/50 rounded-lg hover:bg-card/50 transition text-sm font-medium">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="rounded-lg bg-card/50 border border-border/30 p-6 space-y-4">
              <h2 className="text-lg font-semibold">Personal Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground outline-none focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground outline-none focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Bio</label>
                  <textarea
                    value={user.bio}
                    onChange={(e) => setUser({ ...user, bio: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground outline-none focus:border-primary/50 resize-none h-20"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <input
                      type="text"
                      value={user.location}
                      onChange={(e) => setUser({ ...user, location: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground outline-none focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Member Since</label>
                    <input
                      type="text"
                      value={user.joinDate}
                      disabled
                      className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border/50 text-muted-foreground outline-none cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>
              <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium">
                Save Changes
              </button>
            </div>

            {/* Badges */}
            <div className="rounded-lg bg-card/50 border border-border/30 p-6 space-y-4">
              <h2 className="text-lg font-semibold">Achievements</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: '🔥', name: 'First Steps', date: 'Unlocked Jan 2024' },
                  { icon: '⭐', name: '7-Day Streak', date: 'Unlocked Feb 2024' },
                  { icon: '🏆', name: 'Top 100', date: 'Unlocked Mar 2024' },
                ].map((badge, i) => (
                  <div key={i} className="p-4 rounded-lg bg-card/50 border border-border/30 text-center space-y-2">
                    <div className="text-4xl">{badge.icon}</div>
                    <p className="font-semibold text-sm">{badge.name}</p>
                    <p className="text-xs text-muted-foreground">{badge.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'preferences' && (
          <div className="space-y-4">
            {[
              {
                title: 'Dark Mode',
                description: 'Always use dark theme across the platform',
                icon: Moon,
                value: preferences.darkMode,
                onChange: () => setPreferences({ ...preferences, darkMode: !preferences.darkMode })
              },
              {
                title: 'Email Notifications',
                description: 'Receive notifications about your activity',
                icon: Bell,
                value: preferences.emailNotifications,
                onChange: () => setPreferences({ ...preferences, emailNotifications: !preferences.emailNotifications })
              },
              {
                title: 'Weekly Digest',
                description: 'Get a summary of your progress every week',
                icon: Calendar,
                value: preferences.weeklyDigest,
                onChange: () => setPreferences({ ...preferences, weeklyDigest: !preferences.weeklyDigest })
              },
              {
                title: 'Achievement Updates',
                description: 'Notify me when I unlock new badges',
                icon: Award,
                value: preferences.achievements,
                onChange: () => setPreferences({ ...preferences, achievements: !preferences.achievements })
              },
            ].map((pref, i) => {
              const Icon = pref.icon
              return (
                <div key={i} className="rounded-lg bg-card/50 border border-border/30 p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Icon className="text-primary" size={24} />
                    <div>
                      <p className="font-semibold">{pref.title}</p>
                      <p className="text-sm text-muted-foreground">{pref.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={pref.onChange}
                    className={`w-14 h-8 rounded-full flex items-center transition ${
                      pref.value ? 'bg-primary' : 'bg-border/50'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full bg-white transition-transform ${pref.value ? 'translate-x-7' : 'translate-x-1'}`} />
                  </button>
                </div>
              )
            })}
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="space-y-4">
            {[
              { title: 'New Questions', description: 'When new practice questions are added' },
              { title: 'Challenge Invites', description: 'When someone invites you to a challenge' },
              { title: 'Leaderboard Updates', description: 'When your ranking changes' },
              { title: 'Tips & Tricks', description: 'Weekly tips for interview preparation' },
            ].map((notif, i) => (
              <div key={i} className="rounded-lg bg-card/50 border border-border/30 p-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{notif.title}</p>
                  <p className="text-sm text-muted-foreground">{notif.description}</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-lg border border-border/50 hover:bg-card/50 transition text-sm font-medium">
                    Email
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-primary/20 text-primary border border-primary/30 transition text-sm font-medium">
                    Push
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-4">
            <div className="rounded-lg bg-card/50 border border-border/30 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Lock size={20} className="text-primary" />
                    Password
                  </h3>
                  <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                </div>
                <button className="px-4 py-2 rounded-lg border border-border/50 hover:bg-card/50 transition font-medium text-sm">
                  Change
                </button>
              </div>
            </div>

            <div className="rounded-lg bg-card/50 border border-border/30 p-6 space-y-4">
              <h3 className="font-semibold">Two-Factor Authentication</h3>
              <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
              <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition font-medium text-sm">
                Enable 2FA
              </button>
            </div>

            <div className="rounded-lg bg-card/50 border border-border/30 p-6 space-y-4">
              <h3 className="font-semibold">Active Sessions</h3>
              <div className="space-y-3">
                {[
                  { device: 'Chrome on macOS', location: 'San Francisco, CA', time: 'Active now' },
                  { device: 'Safari on iPhone', location: 'San Francisco, CA', time: 'Last active 2 hours ago' },
                ].map((session, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                    <div className="text-sm space-y-1">
                      <p className="font-medium">{session.device}</p>
                      <p className="text-xs text-muted-foreground">{session.location} • {session.time}</p>
                    </div>
                    <button className="text-xs text-red-400 hover:text-red-300 transition">
                      Logout
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-6 space-y-4">
              <h3 className="font-semibold text-red-400">Delete Account</h3>
              <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
              <button className="px-4 py-2 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition font-medium text-sm">
                Delete Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
