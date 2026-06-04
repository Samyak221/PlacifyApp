'use client'

import { useState } from 'react'
import { Upload, AlertCircle, CheckCircle2, TrendingUp, FileText } from 'lucide-react'

export default function ResumeAnalyserPage() {
  const [file, setFile] = useState<File | null>(null)
  const [analyzed, setAnalyzed] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      setFile(droppedFile)
      analyzeResume(droppedFile)
    }
  }

  const analyzeResume = (file: File) => {
    setIsAnalyzing(true)
    // Simulate analysis
    setTimeout(() => {
      setAnalyzed(true)
      setIsAnalyzing(false)
    }, 2000)
  }

  if (analyzed && file) {
    return <ResumeAnalysisResults file={file} onBack={() => { setFile(null); setAnalyzed(false) }} />
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Resume Analyzer</h1>
        <p className="text-muted-foreground">Get AI-powered feedback on your resume</p>
      </div>

      {/* Upload Section */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className={`rounded-xl border-2 border-dashed p-12 text-center space-y-4 transition cursor-pointer ${
          isAnalyzing ? 'border-primary/50 bg-primary/5' : 'border-border/50 hover:border-primary/50'
        }`}
      >
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Upload size={32} />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Upload Your Resume</h2>
          <p className="text-muted-foreground">Drag and drop your PDF or Word document here</p>
        </div>
        <input
          type="file"
          id="resume-upload"
          className="hidden"
          accept=".pdf,.doc,.docx"
          onChange={(e) => {
            const f = e.target.files?.[0]
            if (f) {
              setFile(f)
              analyzeResume(f)
            }
          }}
        />
        <button
          onClick={() => document.getElementById('resume-upload')?.click()}
          className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
        >
          {isAnalyzing ? 'Analyzing...' : 'Select File'}
        </button>
        <p className="text-xs text-muted-foreground">or click to browse</p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { icon: '📊', title: 'ATS Score', description: 'Check how ATS-friendly your resume is' },
          { icon: '✨', title: 'AI Insights', description: 'Get AI-powered improvement suggestions' },
          { icon: '📈', title: 'Comparison', description: 'Compare with top resumes' },
        ].map((feature, i) => (
          <div key={i} className="glass-panel space-y-3 rounded-lg p-6 text-center">
            <div className="text-4xl">{feature.icon}</div>
            <h3 className="font-semibold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Examples */}
      <div className="glass-panel space-y-4 rounded-lg p-6">
        <h2 className="text-lg font-semibold">What We Analyze</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Resume formatting and structure',
            'Keyword optimization for ATS',
            'Contact information clarity',
            'Achievement quantification',
            'Grammar and spelling',
            'Resume length and organization',
            'Action verb usage',
            'Skill relevance and placement',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-green-400 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ResumeAnalysisResults({ file, onBack }: { file: File; onBack: () => void }) {
  const analysisResults = {
    atsScore: 78,
    overallScore: 82,
    feedback: [
      { category: 'Format', score: 85, feedback: 'Good use of clear sections and formatting', status: 'Good' },
      { category: 'Keywords', score: 72, feedback: 'Could add more technical keywords for your target role', status: 'Fair' },
      { category: 'Clarity', score: 88, feedback: 'Clear and concise descriptions of your achievements', status: 'Excellent' },
      { category: 'Quantification', score: 65, feedback: 'Add more numbers to quantify your impact', status: 'Fair' },
      { category: 'Spelling', score: 95, feedback: 'No spelling or grammar errors found', status: 'Excellent' },
    ]
  }

  return (
    <div className="p-6 space-y-8">
      <button onClick={onBack} className="text-primary hover:underline text-sm font-medium">
        ← Upload Another Resume
      </button>

      {/* Scores */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4 rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-500/15 to-sky-500/10 p-8">
          <h2 className="text-lg font-semibold">ATS Score</h2>
          <div className="space-y-3">
            <div className="text-5xl font-bold text-[var(--brand-end)]">{analysisResults.atsScore}%</div>
            <p className="text-muted-foreground">Your resume is well-optimized for Applicant Tracking Systems</p>
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-green-500/30 bg-gradient-to-br from-green-500/15 to-emerald-500/10 p-8">
          <h2 className="text-lg font-semibold">Overall Score</h2>
          <div className="space-y-3">
            <div className="text-5xl font-bold text-green-400">{analysisResults.overallScore}%</div>
            <p className="text-muted-foreground">Your resume quality is very good</p>
          </div>
        </div>
      </div>

      {/* Detailed Feedback */}
      <div className="glass-panel space-y-4 rounded-lg p-6">
        <h2 className="text-lg font-semibold">Detailed Feedback</h2>
        <div className="space-y-3">
          {analysisResults.feedback.map((item, i) => {
            const statusColors = {
              'Excellent': 'text-green-400',
              'Good': 'text-blue-400',
              'Fair': 'text-yellow-400',
            }
            return (
              <div key={i} className="rounded-lg bg-card/50 border border-border/30 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{item.category}</h3>
                  <span className={`font-bold text-lg ${statusColors[item.status as keyof typeof statusColors]}`}>
                    {item.score}%
                  </span>
                </div>
                <div className="w-full h-2 bg-border/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[var(--brand-start)] to-[var(--brand-end)]"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground">{item.feedback}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Suggestions */}
      <div className="glass-panel space-y-4 rounded-lg p-6">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <AlertCircle size={20} className="text-yellow-400" />
          Improvement Suggestions
        </h2>
        <ul className="space-y-2">
          {[
            'Add 3-4 more quantifiable metrics to your achievements',
            'Include more industry-specific keywords related to your target role',
            'Expand your technical skills section with relevant certifications',
            'Consider highlighting leadership experiences more prominently',
            'Add links to your portfolio or GitHub projects',
          ].map((suggestion, i) => (
            <li key={i} className="flex items-start gap-3 p-3 bg-card/50 rounded-lg">
              <span className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 text-xs font-bold text-yellow-400 mt-0.5">
                {i + 1}
              </span>
              <span className="text-sm text-muted-foreground">{suggestion}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button className="flex-1 px-6 py-3 border border-border/50 rounded-lg hover:bg-card/50 transition font-medium">
          Download Report
        </button>
        <button className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium">
          Build Better Resume
        </button>
      </div>
    </div>
  )
}
