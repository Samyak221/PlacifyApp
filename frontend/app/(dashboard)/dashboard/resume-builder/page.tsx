'use client'

import { useState } from 'react'
import { ChevronRight, Plus } from 'lucide-react'

type Step = 'template' | 'form' | 'preview'

const templates = [
  { id: 1, name: 'Modern', color: 'from-purple-400 to-pink-400', icon: '✨' },
  { id: 2, name: 'Classic', color: 'from-blue-400 to-cyan-400', icon: '📋' },
  { id: 3, name: 'Creative', color: 'from-orange-400 to-red-400', icon: '🎨' },
]

export default function ResumeBuilderPage() {
  const [step, setStep] = useState<Step>('template')
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 000-0000',
    location: 'San Francisco, CA',
    summary: 'Experienced full-stack developer with 5+ years of expertise in building scalable web applications.',
    experience: [
      {
        company: 'Tech Company',
        role: 'Senior Developer',
        duration: '2022 - Present',
        description: 'Led development of microservices architecture'
      }
    ],
    education: [
      {
        school: 'University Name',
        degree: 'B.S. in Computer Science',
        year: '2018'
      }
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker']
  })

  if (step === 'template') {
    return (
      <div className="p-6 space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Resume Builder</h1>
          <p className="text-muted-foreground">Choose a template to get started</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => {
                setSelectedTemplate(template.id)
                setStep('form')
              }}
              className="group cursor-pointer rounded-lg overflow-hidden border border-border/30 hover:border-primary/50 transition"
            >
              <div className={`h-64 bg-gradient-to-br ${template.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl opacity-50">{template.icon}</div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
              </div>
              <div className="p-4 bg-card/50 space-y-2">
                <h3 className="font-semibold">{template.name}</h3>
                <p className="text-xs text-muted-foreground">Professional and clean design</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (step === 'form') {
    return (
      <div className="p-6 space-y-8 max-w-4xl">
        <button
          onClick={() => setStep('template')}
          className="text-primary hover:underline text-sm font-medium"
        >
          ← Change Template
        </button>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Build Your Resume</h1>
          <p className="text-muted-foreground">Fill in your information to create your resume</p>
        </div>

        <div className="space-y-8">
          {/* Personal Info */}
          <section className="rounded-lg bg-card/50 border border-border/30 p-6 space-y-4">
            <h2 className="text-lg font-semibold">Personal Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground outline-none focus:border-primary/50"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground outline-none focus:border-primary/50"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground outline-none focus:border-primary/50"
              />
              <input
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground outline-none focus:border-primary/50"
              />
            </div>
            <textarea
              placeholder="Professional Summary"
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground outline-none focus:border-primary/50 resize-none h-24"
            />
          </section>

          {/* Experience */}
          <section className="rounded-lg bg-card/50 border border-border/30 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Experience</h2>
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition text-sm font-medium">
                <Plus size={16} />
                Add
              </button>
            </div>
            {formData.experience.map((exp, i) => (
              <div key={i} className="space-y-3 p-4 bg-background/50 rounded-lg border border-border/30">
                <input
                  type="text"
                  placeholder="Company"
                  value={exp.company}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground outline-none focus:border-primary/50"
                />
                <input
                  type="text"
                  placeholder="Role"
                  value={exp.role}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground outline-none focus:border-primary/50"
                />
                <input
                  type="text"
                  placeholder="Duration (e.g., 2022 - Present)"
                  value={exp.duration}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground outline-none focus:border-primary/50"
                />
                <textarea
                  placeholder="Description"
                  value={exp.description}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground outline-none focus:border-primary/50 resize-none h-20"
                />
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="rounded-lg bg-card/50 border border-border/30 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Education</h2>
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition text-sm font-medium">
                <Plus size={16} />
                Add
              </button>
            </div>
            {formData.education.map((edu, i) => (
              <div key={i} className="space-y-3 p-4 bg-background/50 rounded-lg border border-border/30">
                <input
                  type="text"
                  placeholder="School/University"
                  value={edu.school}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground outline-none focus:border-primary/50"
                />
                <input
                  type="text"
                  placeholder="Degree"
                  value={edu.degree}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground outline-none focus:border-primary/50"
                />
                <input
                  type="text"
                  placeholder="Year"
                  value={edu.year}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground outline-none focus:border-primary/50"
                />
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="rounded-lg bg-card/50 border border-border/30 p-6 space-y-4">
            <h2 className="text-lg font-semibold">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill, i) => (
                <div
                  key={i}
                  className="px-3 py-2 rounded-lg bg-primary/10 text-primary border border-primary/30 text-sm font-medium flex items-center gap-2"
                >
                  {skill}
                  <button className="text-xs hover:text-red-400 transition">×</button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add a skill"
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground outline-none focus:border-primary/50"
              />
              <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition font-medium">
                Add
              </button>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex gap-4">
            <button
              onClick={() => setStep('template')}
              className="px-6 py-3 border border-border/50 rounded-lg hover:bg-card/50 transition font-medium"
            >
              Back
            </button>
            <button
              onClick={() => setStep('preview')}
              className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium flex items-center justify-center gap-2"
            >
              Preview Resume
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (step === 'preview') {
    return (
      <div className="p-6 space-y-6">
        <button
          onClick={() => setStep('form')}
          className="text-primary hover:underline text-sm font-medium"
        >
          ← Edit Resume
        </button>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Preview */}
          <div className="md:col-span-2 rounded-lg bg-white text-black p-8 space-y-6 shadow-lg">
            {/* Header */}
            <div className="text-center space-y-1 border-b border-black/20 pb-4">
              <h1 className="text-3xl font-bold">{formData.fullName}</h1>
              <div className="flex justify-center gap-4 text-sm">
                <span>{formData.email}</span>
                <span>{formData.phone}</span>
                <span>{formData.location}</span>
              </div>
            </div>

            {/* Summary */}
            {formData.summary && (
              <div className="space-y-2">
                <h2 className="text-sm font-bold uppercase tracking-wide">Professional Summary</h2>
                <p className="text-sm">{formData.summary}</p>
              </div>
            )}

            {/* Experience */}
            {formData.experience.length > 0 && (
              <div className="space-y-3 border-t border-black/20 pt-4">
                <h2 className="text-sm font-bold uppercase tracking-wide">Experience</h2>
                {formData.experience.map((exp, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-semibold">{exp.role}</p>
                        <p className="text-sm text-gray-600">{exp.company}</p>
                      </div>
                      <p className="text-sm text-gray-600">{exp.duration}</p>
                    </div>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {formData.education.length > 0 && (
              <div className="space-y-3 border-t border-black/20 pt-4">
                <h2 className="text-sm font-bold uppercase tracking-wide">Education</h2>
                {formData.education.map((edu, i) => (
                  <div key={i}>
                    <div className="flex justify-between">
                      <p className="font-semibold">{edu.degree}</p>
                      <p className="text-sm text-gray-600">{edu.year}</p>
                    </div>
                    <p className="text-sm text-gray-600">{edu.school}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Skills */}
            {formData.skills.length > 0 && (
              <div className="space-y-2 border-t border-black/20 pt-4">
                <h2 className="text-sm font-bold uppercase tracking-wide">Skills</h2>
                <p className="text-sm">{formData.skills.join(' • ')}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="rounded-lg bg-card/50 border border-border/30 p-6 space-y-4">
              <h2 className="font-semibold">Download Options</h2>
              <button className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium text-sm">
                Download PDF
              </button>
              <button className="w-full px-4 py-3 border border-border/50 rounded-lg hover:bg-card/50 transition font-medium text-sm">
                Download DOCX
              </button>
            </div>

            <div className="rounded-lg bg-card/50 border border-border/30 p-6 space-y-4">
              <h2 className="font-semibold">Actions</h2>
              <button className="w-full px-4 py-3 border border-border/50 rounded-lg hover:bg-card/50 transition font-medium text-sm">
                Analyze with AI
              </button>
              <button className="w-full px-4 py-3 border border-border/50 rounded-lg hover:bg-card/50 transition font-medium text-sm">
                Share Resume
              </button>
            </div>

            <div className="brand-gradient-surface space-y-3 rounded-lg border border-primary/25 p-6">
              <p className="text-sm text-muted-foreground">Ready to send it out? Analyze your resume first to get an ATS score.</p>
              <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition text-sm font-medium">
                Analyze Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
